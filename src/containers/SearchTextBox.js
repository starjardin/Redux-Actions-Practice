import { connect } from 'react-redux'

import SearchTextBox from '../components/SearchTextBox'
import { searchText} from '../actions'

const mapDispatchToProps = {
  set: searchText
}

export default connect(null, mapDispatchToProps)(SearchTextBox)