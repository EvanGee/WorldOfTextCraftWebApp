import { connect } from 'react-redux'
import { connect_to_host, ready_input, send_message, create_character, open_dialog, set_player_value, set_player_address, get_all_owned_items } from '../modules/main'
import Page from '../components/main'



const mapDispatchToProps = {
    ready_input,
    send_message: (e) => send_message(e),
    create_character,
    open_dialog,
    set_player_value,
    set_player_address,
    get_all_owned_items
}

const mapStateToProps = (state) => ({
    connected : state.WorldOfTextCraft.connected,
    messages : state.WorldOfTextCraft.messages,
    input : state.WorldOfTextCraft.input,
    openDialogBool: state.WorldOfTextCraft.open_dialog,
    playerValues: {
        "Strength": state.WorldOfTextCraft.Strength,
        "Dexterity": state.WorldOfTextCraft.Dexterity,
        "Constitution": state.WorldOfTextCraft.Constitution,
        "Intelligence": state.WorldOfTextCraft.Intelligence,
        "Wisdom": state.WorldOfTextCraft.Wisdom,
        "Charisma": state.WorldOfTextCraft.Charisma,
    },
    playerAddress: state.WorldOfTextCraft.playerAddress,
    items: state.WorldOfTextCraft.items
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
