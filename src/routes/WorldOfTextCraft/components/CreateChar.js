
import React from 'react'
import TextField from "material-ui/TextField"
import Button from "material-ui/FloatingActionButton"
const lables = (lable, key, set_player_value, value) => {

    const style = {
        width: 50,
    }

    return (
        <div key={key} className="attributes" >
            <lable className="labels">
                {lable}:
        </lable>
            <TextField
                id={lable}
                type="number"
                style={style}
                onChange={(e)=>{set_player_value(lable, e.target.value)}}
                value = {value}
            />

        </div >
    )
}

const CreateChar = ({ open_dialog, create_character, set_player_value, playerValues }) => {

    let lablesText = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
  
    return (
        <div style={{ height: 350 }}>
            <div style={{ position: "relative" }}>
                <Button onClick={() => create_character()}> Create </Button>
                <Button onClick={() => open_dialog(false)} style={{ position: "absolute", right: 0, backgroundColor: "red" }}> X </Button>
            </div>

            <div className="containerContainer">
                <div className="container">
                    {lablesText.map((d, i)=>{return lables(d, i, set_player_value, playerValues[d])})}
                </div>
            </div>

        </div>)
}

export default CreateChar