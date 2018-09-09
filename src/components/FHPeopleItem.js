import React, {Component} from 'react';
import {Text, Image, View, ImageBackground} from 'react-native';
import styles from './styles';
import FHFollowButton from './FHFollowButton';

class FHPeopleItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <View style={styles.contactItem}>
            <View>
                <FHFollowButton following={this.props.following} username={this.props.username}/>
            </View>
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
        </View>
        )
    }
}

export default FHPeopleItem;