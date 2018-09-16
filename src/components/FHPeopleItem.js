import React, {Component} from 'react';
import {Text, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import FHFollowButton from './FHFollowButton';
import {push, navigateToProfile} from '../../NavigationService';
import {connect} from 'react-redux';
class FHPeopleItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let numOfMutual;
        if(this.props.numOfMutual) {
            numOfMutual = <View><Text style={{fontSize:10}}>{this.props.numOfMutual + "  دوست مشترک"}</Text></View>
        }
        return (
        <View style={styles.contactItem}>
            <View>
                <FHFollowButton isPrivate={this.props.isPrivate} following={this.props.following} username={this.props.username}/>
            </View>
            {numOfMutual}
            <TouchableOpacity onPress = {()=> {navigateToProfile(this.props.username, this.props.ownUsername)}}>
            
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column', marginRight:10, alignItems:"flex-end"}}>
                    
                    <Text style={{fontWeight:'bold'}}>{this.props.username}</Text>
                    <Text>{this.props.name}</Text>
                </View>
                <View>
                    {/* <Image style={styles.peopleImage} source={{uri : this.props.avatar}}/> */}
                    <ImageBackground source={{uri : this.props.avatar}} imageStyle={styles.peopleImage}
                    style={[styles.peopleImage, {backgroundColor:'#EFEFEF'}]}/>
                </View>
            </View>
            </TouchableOpacity>
        </View>
        )
    }
}
const mapStateToProps = state => {
    return({
        ownUsername : state.userInfoApp.getSelfInfoReducer.data.username,
    })
}

export default connect(mapStateToProps, null)(FHPeopleItem);
