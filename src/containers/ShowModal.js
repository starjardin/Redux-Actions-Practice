import { connect } from 'react-redux'
import ShowModal from '../components/ShowModal'
import { toggleModal } from '../actions'

const mapDispatchToProps = {
  toggleModal
}

export default connect(null, mapDispatchToProps)(ShowModal)
