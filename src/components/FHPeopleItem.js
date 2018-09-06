import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';

class FHPeopleItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <View style={styles.contactItem}>
            <View>
                <Button style={styles.contactButton}><Text style={{color:'white'}}>دنبال شده</Text></Button>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column', marginRight:10}}>
                    <Text style={{fontWeight:'bold'}}>{this.props.username}</Text>
                    <Text>{this.props.name}</Text>
                </View>
                <View>
                    <Image style={styles.peopleImage} source={{uri : 'https://cdn.pbrd.co/images/HB6osO8.jpg'}}/>
                </View>
            </View>
        </View>
        )
    }
}

export default FHPeopleItem;