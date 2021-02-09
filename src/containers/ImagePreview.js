import { connect } from 'react-redux'

import ImagePreview from '../components/ImagePreview'

function mapStateToProps (state) {
  console.log(state);
  return {
    imageUrl: state.imageUrl,
    scale: state.imageScale
  }
}

export default connect(mapStateToProps, null)(ImagePreview)