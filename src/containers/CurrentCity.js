import { connect } from 'react-redux'
import CurrentCity from '../components/CurrentCity'

export default connect(({ currentCity }) => ({ currentCity }), null)(CurrentCity);
