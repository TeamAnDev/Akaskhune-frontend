import React from 'react';
import {Component} from 'react';
import {View, Image, ListView, Text, FlatList} from 'react-native';
import styles from './styles';
import FHRow from '../../components/FHRow';
import {requestImages, imageRequestInit} from '../../actions/profile/profileRequest'
import {connect} from 'react-redux';
import {Spinner, Icon} from 'native-base';
import colors from '../../config/colors';
import {rest} from '../../config/urls';
import {PulseIndicator} from 'react-native-indicators';


class Images extends Component {

    constructor(props) {
        super(props);
        this.dataSource = [];
        this.props.init();
        this.props.requestImages(rest.imagesSelf);     
    }

    render() {
        let toReturn;
        if(this.props.success) {
            let data = [];
            if(this.props.images.length === 0) {
                toReturn = <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Icon type="Feather" name="close"/>
                    <Text>هیچ پستی وجود ندارد</Text>
                </View>            
            }
            else {
                for (let i = 0; i < this.props.images.length; i+=2) {
                    let rightImage = "" ;
                    if(this.props.images[i+1] !== undefined) {
                        rightImage =  this.props.images[i+1].photo_url
                    } ;
                    let leftImage = '';
                    if(this.props.images[i] !== undefined) {
                        leftImage =  this.props.images[i].photo_url
                    } ;
                    data[i/2] = [{uri:leftImage}, {uri: rightImage}];
                }
                this.dataSource = data;
                toReturn = <FlatList
                    refreshing={this.props.loading}
                    data = {this.dataSource}
                    renderItem = {({item}) => <FHRow leftImage={item[0]} rightImage={item[1]}/>}
                    onEndReached = {() => {this.props.requestImages(this.props.url); console.warn("end")}}
                    
                />
            }
        } 
        else if(this.props.loading) {
            toReturn = <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <View style={{ height:80, width:80}}>
                    <PulseIndicator count={8} size={70} color={colors.accentColor}/>
                    </View>
                    <Text>در حال بارگزاری اطلاعات</Text>
                </View>  
        }
        else {
            toReturn = <View><Text>error</Text></View>
        }
        return toReturn;
    }
}

const mapStateToProps = state => {
    return ({
        images : state.profileApp.imagesRequestReducer.images,
        success : state.profileApp.imagesRequestReducer.success,
        loading : state.profileApp.imagesRequestReducer.loading,
        url : state.profileApp.imagesRequestReducer.url
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        requestImages : (url) => dispatch(requestImages(url)),
        init : () => dispatch(imageRequestInit())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);