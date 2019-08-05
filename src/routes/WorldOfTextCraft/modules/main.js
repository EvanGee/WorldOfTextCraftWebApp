import io from 'socket.io-client';
import Web3 from 'web3';
import { newPlayer, getPlayerByAddress } from "../../../BlockChain/PlayerRegistry"
import {buyItem,addItem, listAllOwnedItems} from "../../../BlockChain/GameInteractions"
import images from "./images"
import hal from "../../../Images/HAL.png"

// ------------------------------------
// Constants
// ------------------------------------

const NEW_MESSAGE = "NEW_MESSAGE"
const CONNECT = "CONNECT"
const HOST = "HOST"
const INPUT = "INPUT"
const NEW_ID = "NEW_ID"
const OPEN_DIALOG = "OPEN_DIALOG"
const SET_PLAYER_VALUE = "SET_PLAYER_VALUE"
const SET_PLAYER_ADDRESS = "SET_PLAYER_ADDRESS"
const MSG_SERVER = "MSG_SERVER"
const CURRENT_OWNED = "CURRENT_OWNED"
// ------------------------------------
// Actions
// ------------------------------------
export const set_player_address = () => {

  return (dispatch, getState) => {

    getPlayerByAddress(web3.eth.defaultAccount)
      .then((res) => {
        dispatch({ type: SET_PLAYER_ADDRESS, value: res })
      })
      .catch(console.error)
  }
}

export const open_dialog = (value) => ({ type: OPEN_DIALOG, value })
export const ready_input = (value) => ({ type: INPUT, value })
export const set_player_value = (id, value) => ({ type: SET_PLAYER_VALUE, id, value })
const message_recv = (text, image) => ({ type: NEW_MESSAGE, value:{text,image} })
const connected = (value) => ({ type: CONNECT, value })
const host = (value) => ({ type: HOST, value })
const newId = (value) => ({ type: NEW_ID, value })
const msg_server = (value) => ({type:MSG_SERVER, value})

export const get_all_owned_items = () => {
  return (dispatch, getState) => {
    listAllOwnedItems().then((res)=>{
      dispatch({type:CURRENT_OWNED, value:res})
    })
  }
  
}

export const create_character = () => {
  return (dispatch, getState) => {

    if (web3.eth.defaultAccount === undefined) {
      dispatch(message_recv("please sign into metamask to create a character", hal))
      return
    }
    const state = getState().WorldOfTextCraft
    newPlayer([
      state.Strength,
      state.Dexterity,
      state.Constitution,
      state.Intelligence,
      state.Wisdom,
      state.Charisma])

      .then((res) => {
        dispatch(message_recv("new character created, it may take a while before your character is mined, refresh in 15 seconds or so to see it", hal))
      
      })
      .catch((err) => {
        dispatch(message_recv("could not create character", hal))
      })

  }
}


export const send_message = (e) => {

  return (dispatch, getState) => {
    if (e.key === 'Enter') {

      let state = getState().WorldOfTextCraft
      if (state.connected === false) {
        dispatch(message_recv("...Connecting", hal))
        dispatch(connect_to_host("ws://localhost:3001"));
        return
      }
      state.host.send(`${state.id}:${state.input}`)
      dispatch(ready_input(""))
    }
  }
}

export const connect_to_host = (url) => {
  return (dispatch, getState) => {
    const state = getState().WorldOfTextCraft
    if (state.connected)
      return

    if (state.id === "") {
      if (web3.eth.defaultAccount !== undefined)
        dispatch(newId(web3.eth.defaultAccount))
      else {
        dispatch(message_recv("please sign into metamask before continuing", hal))
        return;
      }
    }
    // Create WebSocket connection.
    const socket = io(url);
    socket.on('connect', () => {
      dispatch(host(socket))
      dispatch(connected(true))
      dispatch(message_recv("Connected type anything to continue", hal))
    });

//id:code:id:text
    socket.on('message', (data) => {
      //console.log("raw message:", data)
      const msgList = data.split(":")

      if (msgList[1] === "buy"){
        buyItem(msgList[2], msgList[3])
        .then((addr)=>{
          dispatch(message_recv("purchased "  + msgList[2] + " for " + msgList[3], hal))

          addItem(addr).then((res)=>{
            dispatch(message_recv("added Item "  + msgList[2] + " To inventory", hal))
          })
          .catch(()=>{
            dispatch(message_recv("couldn't add item to inventory", hal))
          })

        })
        .catch(()=>{
          dispatch(message_recv("couldn't buy item", hal))
        })
      }

      else if (msgList[1] === "explore" || msgList[1] === "examine") {
        dispatch(message_recv(msgList.slice(3).join(":"), images[msgList[2]]))
      }

      else
        dispatch(message_recv(msgList.slice(1).join(":"), hal))
    });

    socket.on('disconnect', (data) => {
      dispatch(connected(false))
      console.log("disconnected")
    });

  }
}


      
        
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CURRENT_OWNED] : (state, action) => {
    return {
      ...state, items: action.value
    }
  },
  [MSG_SERVER]: (state, action) => {
    state.host.send(`${state.id}:${value}`)
  },
  [NEW_MESSAGE]: (state, action) => {
    //console.log(action.value)
    return {
    ...state,
    messages: [...state.messages, action.value]
  }},
  [CONNECT]: (state, action) => ({
    ...state,
    connected: action.value
  }),
  [HOST]: (state, action) => ({
    ...state,
    host: action.value
  }),
  [INPUT]: (state, action) => ({
    ...state,
    input: action.value
  }),
  [NEW_ID]: (state, action) => ({
    ...state,
    id: action.value
  }),
  [OPEN_DIALOG]: (state, action) => ({
    ...state,
    open_dialog: action.value
  }),
  [SET_PLAYER_ADDRESS]: (state, action) => ({
    ...state,
    playerAddress: action.value
  }),
  [SET_PLAYER_VALUE]: (state, action) => {


    let value = action.value;
    if (action.value < 8)
      value = 8
    else if (action.value > 16)
      value = 16


    var total = parseInt(state.Strength)
      + parseInt(state.Dexterity)
      + parseInt(state.Constitution)
      + parseInt(state.Intelligence)
      + parseInt(state.Wisdom) +
      parseInt(state.Charisma)

    if (((total - parseInt(state[action.id]) + parseInt(value))) > 72)
      return {
        ...state,
      }

    return {
      ...state,
      [action.id]: value
    }
  }

}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  id: "",
  messages: [{image:hal, text:"Hello! this is a basic multiplayer text based adventure, it is a proof of concept used to show off how we can unify games and blockchain tech! You need a Metamask browser extension and account, once you have that, type anything to connect, when connected type 'h' to see a help menu of commands!"}],
  connected: false,
  host: "",
  input: "",
  open_dialog: false,
  Strength: "10",
  Dexterity: '10',
  Constitution: '10',
  Intelligence: '10',
  Wisdom: '10',
  Charisma: '10',
  playerAddress: "Create a character, or sign in if you already have one!",
  items: []
}
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
