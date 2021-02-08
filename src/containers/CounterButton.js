import { connect } from 'react-redux'
import CounterButton from '../components/CounterButton'
import { increase, decrease } from '../actions/'


const mapToDispatch = {
  increase, decrease
}

export default connect(null, mapToDispatch)(CounterButton)