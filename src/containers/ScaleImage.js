import { connect } from 'react-redux'

import ScaleImage from '../components/ScaleImage'
import { imageScale } from '../actions/'

export default connect(null, {set: imageScale})(ScaleImage)