import {connect} from 'react-redux';
import Users from '../components/Users';

function mapStateToProps (state) {
  return {
    ...state,
    users: state.users,
    sortOn : state.currentUserSort
}
}

export default connect(mapStateToProps, null)(Users)