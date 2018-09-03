import React, { Component } from 'react';
import {View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {changeCaption, changeTags} from '../../../actions/newPost/completePostActions'
import TagAndLocationInputs from './TagAndLocationInputs';
import TopInputs from './TopInputs';


class NewPostCompleteInputs extends Component {
  
  render() {
    return (
        <View style={{flex:1}}>
            <TopInputs changeCaption={this.props.changeCaption} sourceImage={this.props.sourceImage}/>
            <TagAndLocationInputs changeTags={this.props.changeTags}/>
        </View>
    )
  }
}
const mapStateToProps = state => {
    return({
      sourceImage : state.newPostApp.newPostReducer.postImageSource,

    });
  }
  
  const mapDispatchToProps = dispatch => {
    return({
        changeTags : (tags) => dispatch(changeTags(tags)),
        changeCaption : (caption) => dispatch(changeCaption(caption)),
    });
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewPostCompleteInputs);