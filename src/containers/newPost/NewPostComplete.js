import React from 'react';
import {Component} from 'react';
import {View, Dimensions} from 'react-native';
import FHHeader from '../../components/FHHeader';
import NewPostCompleteInputs from './NewPostCompleteComponents/NewPostCompleteInputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FHButton from '../../components/FHButton';
import {connect} from 'react-redux';
import {createNewPost} from '../../actions/newPost/requestActions';
import showSucces from '../../components/Toasts/showSucces';
import showError from '../../components/Toasts/showError';
import {popToTop} from '../../../NavigationService';
const bottomOfButton = Dimensions.get("window").height * 3 / 100;
class NewPostComplete extends Component
{
    constructor(props)
    {
        super(props);
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.succes !== this.props.succes && nextProps.succes)
        {
            showSucces("تصویر با موفقیت ارسال گردید",undefined, 7000);
            popToTop();

        }
        if(nextProps.errbool !== this.props.errbool && nextProps.errbool)
        {
            showError(nextProps.error, "باشه" , 7000);
        }
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:"white"}}>
                <FHHeader title="ثبت‌ توضیح"/>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{flexGrow:1}} >
                    <View style={{flex:241}}>
                        <NewPostCompleteInputs/>
                    </View>
                    <View style={{width:"100%", position:"absolute", bottom:bottomOfButton}}>
                        <FHButton title="ارسال پست" 
                        onPress={() => this.props.createNewPost(this.props.sourceImage, this.props.caption, this.props.tags)} loading={this.props.loading}/>
                    </View>
                 </KeyboardAwareScrollView>
            </View>
            );
    }
}
const mapStateToProps = state => {
    return({
        sourceImage : state.newPostApp.newPostReducer.postImageSource,
        caption : state.newPostApp.completePostReducer.caption,
        tags : state.newPostApp.completePostReducer.tags,
        succes : state.newPostApp.newPostReducer.succes,
        errbool : state.newPostApp.newPostReducer.errbool,
        error : state.newPostApp.newPostReducer.error,
        loading : state.newPostApp.newPostReducer.loading
    });
  }
  
  const mapDispatchToProps = dispatch => {
    return({
        createNewPost : (sourceImage, caption, tags) => dispatch(createNewPost(sourceImage, caption, tags)),

    });
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewPostComplete);