import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import colors from '../../../config/colors'


class ImageItem extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    var { width } = Dimensions.get('window');
    var { imageMargin, imagesPerRow, containerWidth } = this.props;

    if (typeof containerWidth != "undefined") {
      width = containerWidth;
    }
    this._imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
  }

  render() {
    var { item, selected, selectedMarker, imageMargin } = this.props;

    var marker = selectedMarker ? selectedMarker :
      <View 
      style={{backgroundColor:"rgba(255,255,255,0.7)", height: this._imageSize, width: this._imageSize,justifyContent:"center", borderRadius:this._imageSize/10
              , opacity:12}} 
      // imageStyle={{borderRadius:this._imageSize/10}}
      >
      <Icon name="check" type="Feather"
      style={{alignSelf: 'center',fontSize: 49}}
      />
      </View>;
    var image = item.node.image;

    return (
      <TouchableOpacity 
        style={{ marginBottom: imageMargin, marginRight: imageMargin }}
        onPressIn={() => this._handleClick(image)}>
        <ImageBackground
          source={{ uri: image.uri }}
          style={{ height: this._imageSize, width: this._imageSize , justifyContent:"center", alignItems:"center"}}
          imageStyle={{borderRadius:this._imageSize/10}} >
          {(selected) ? marker : null}
        </ImageBackground>
      </TouchableOpacity>
      
    );
  }

  _handleClick(item) {
    console.warn("clicked");
    this.props.onClick(item);
  }
}

const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
})

ImageItem.defaultProps = {
  item: {},
  selected: false,
}

ImageItem.propTypes = {
  item: PropTypes.object,
  selected: PropTypes.bool,
  selectedMarker: PropTypes.element,
  imageMargin: PropTypes.number,
  imagesPerRow: PropTypes.number,
  onClick: PropTypes.func,
}

export default ImageItem;
