
import React from 'react'
import {
  View,
  Dimensions,
} from 'react-native'
import GalleryPreview from './GalleryPreview';
import colors from '../../config/colors';
import SlidingUpPanel from 'rn-sliding-up-panel'

const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  panelHeader: {
    height: height * 26 / 640,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
export default class BottomSheet extends React.Component {
  static defaultProps = {
    draggableRange: {
      top: height ,
      bottom: height * 365 /640
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <SlidingUpPanel
          visible
          startCollapsed
          showBackdrop={false}
          ref={c => this._panel = c}
          draggableRange={this.props.draggableRange}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <View style={{backgroundColor:colors.blackGrey, width:55, height:5, borderRadius:3}}></View>
            </View>
            <View style={styles.container}>
              <GalleryPreview/>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}
