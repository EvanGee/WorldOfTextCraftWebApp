import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/main'


import Page from '../components/main'


const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
