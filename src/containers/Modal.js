import { connect } from 'react-redux'

import Modal from '../components/Modal'
import { toggleModal } from '../actions/'

function mapStateToProps (state) {
  return {
    displayModal : state.displayModal
  }
}
const mapDispatchToProps = {
  toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)