import { connect } from 'react-redux';
import SpecialTextBox from "../components/SpecialTextBox";
import { setSpecialText } from '../actions'

//map the "setSpecialText" action function to a prop function called "set"
const mapDispatchToProps = {
  set: setSpecialText
}

export default connect(null, mapDispatchToProps)(SpecialTextBox);
