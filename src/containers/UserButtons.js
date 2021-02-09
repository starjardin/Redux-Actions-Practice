import { connect } from 'react-redux'

import UserButtons from '../components/UserButtons'

import { addUser, removeUser } from '../actions'
const mapDispatchToProps = {
  add: addUser, remove: removeUser
}

export default connect(null, mapDispatchToProps)(UserButtons)