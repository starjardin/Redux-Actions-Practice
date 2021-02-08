import { connect } from 'react-redux'
import Thermostat from '../components/Thermostat'


export default connect((state) => ({ temp: state.currentTemp }), null)(Thermostat)