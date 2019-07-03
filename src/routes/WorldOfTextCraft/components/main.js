import React from 'react'
import PropTypes from 'prop-types'
import TextField from "material-ui/TextField"
import Button from "material-ui/FloatingActionButton"
import Avatar from "material-ui/Avatar"
import classes from "./WOTC.scss"
import { darkBaseTheme, getMuiTheme, withStyles } from 'material-ui/styles';
import Dialog from "material-ui/Dialog"
import Footer from "../../../components/Footer"
import CreateChar from "./CreateChar"
import { create } from 'domain';


const scrollDown = (div) => {
  if (div === null)
    return
  div.scrollTop = div.scrollHeight;
}

class Message extends React.Component {

  constructor(props) {
    super()
  }

  componentDidMount() {
    scrollDown(document.getElementById("textBox"))
  }

  render() {
    return this.props.item
  }

}

export const Page = ({ set_player_address, playerAddress, connect_to_host, messages, connected, ready_input, send_message, input, create_character, open_dialog, openDialogBool, set_player_value, playerValues }) => {

  const style = getMuiTheme()

  if(playerAddress === "Create a character, or sign in if you already have one!"){
    set_player_address()
  }
  
  return (
    <div style={{ margin: '0 auto' }} style={{ background: style.palette.primary2Color }} >

      <div className="buttons">
        <Button style={{margin:10}}><a href="https://metamask.io/">Meta</a> </Button>
        <Button style={{margin:10}} onClick={() => { open_dialog(true) }}><div>Create</div></Button>        
      </div>
    
      <div className="playerId"><Avatar>P</Avatar> {playerAddress}</div>
    
      <Dialog open={openDialogBool} onRequestClose={() => open_dialog(false)}>
        <CreateChar {...{set_player_value, open_dialog, create_character, playerValues}} />
      </Dialog>

      <div id="textBox" className={"textbox"} style={{ background: style.palette.accent2Color }} >
        {messages.map((d, i) => {
          return <Message key={i} item={<div><Avatar />{d}</div>}> </Message >
        })}

      </div>

      <div className={"input"}>
        <TextField
          id="name"
          label="Name"
          className={"text"}
          placeholder={"type here to play"}
          fullWidth={true}
          value={input}
          onKeyDown={(e) => send_message(e)}
          onChange={(e) => ready_input(e.target.value)}
        />
      </div>
      <Footer />
    </div>
  )
}
Page.propTypes = {
}

export default Page
