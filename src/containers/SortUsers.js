import { connect } from 'react-redux'
import SortUsers from '../components/SortUsers'
import { sortUserName } from '../actions'

export default connect(null, { set: sortUserName })(SortUsers)
