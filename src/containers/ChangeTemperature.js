import { connect } from 'react-redux'

import ChangeTemperature from '../components/ChangeTemperature'
import { changeTemperature } from '../actions/'

const mapDispatchToProps = {
  set : changeTemperature
}

export default connect(null, mapDispatchToProps)(ChangeTemperature)