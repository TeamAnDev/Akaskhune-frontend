import React from 'react';
import {View, Dimensions, ImageBackground, Text, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';
import {connect} from 'react-redux';
import {navigateToProfile} from '../../../NavigationService';
const heightOfBar = Dimensions.get("window").height * 60/640;
const widthOfImage = Dimensions.get('window').width * 28/360;
const marginOfAvatar = Dimensions.get('window').width * 17/360;

const AcceptOrRejectNotif = ({name, time, username, avatarUrl, type, ownUsername}) => (
    <TouchableOpacity onPress = {()=>{navigateToProfile(username, ownUsername)}}>
    <View 
    style={{height : heightOfBar, 
    flexDirection : 'row', 
    backgroundColor :'white', 
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor : colors.grey}}>
        <View style={{flex:11, marginRight : widthOfImage/2}}>
            <View style={{flexDirection : 'row', justifyContent:'flex-end'}}>
                <Text style = {{ textAlign : 'right', color : 'black'}}> 
                    {type === 'accept' ? " درخواست دوستی شما را قبول کرد "  : " درخواست دوستی شما را رد کرد "}
                </Text>
                <Text style = {{ textAlign : 'right', color : 'black'}}> 
                    {name}
                </Text>
            </View>
            <Text style = {{width : '100%', textAlign : 'right'}}>{time}</Text>
        </View>
        <View style={{flex:1, marginRight : marginOfAvatar}}>
            <ImageBackground 
                source = {{uri : avatarUrl}}
                style = {{backgroundColor : colors.blackGrey,
                        borderRadius : widthOfImage/2, 
                        width : widthOfImage,
                        height : widthOfImage,
                        }}
                imageStyle = {{borderRadius : widthOfImage/2}}/>
        </View>
    </View>
    </TouchableOpacity>
)
const mapStateToProps = state => {
    return({
        ownUsername : state.userInfoApp.getSelfInfoReducer.data.username,
    })
}

export default connect(mapStateToProps, null)(AcceptOrRejectNotif);