import React , {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { Button } from 'native-base';
import {followRequest} from '../actions/follow/followRequest'
import {connect} from 'react-redux';

function getButtonText(status) {
    switch(status) {
        case "not_invited" :
            return "دعوت";
        case "invited" :
            return "دعوت شده";    
        case "not_followed" :
            return "دنبال کن";
        case "followed" :
            return "دنبال شده";
    }
}

const ActionButton = (props) => {
    switch(props.status) {
        case "not_invited" :
            return <Button onPress={props.onPress} style={styles.contactButton} transparent dark><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;
        case "invited" :
            return <Button onPress={props.onPress} style={styles.contactButton} transparent light><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;    
        case "not_followed" :
            return <Button onPress={props.onPress} style={styles.contactButton} bordered dark><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;
        case "followed" :
            return <Button onPress={props.onPress} style={styles.contactButton} dark><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;
        default :
            return <Button transparent dark><Text>{getButtonText(props.status)}</Text></Button>;

    }
}

class FHContactItem extends Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        if(this.props.status === 'not_followed') {
            this.props.followRequest(this.props.username);
        }
    }
    
    render() {
        return (
            <View style={styles.contactItem}>
                <ActionButton onPress={this.onPress} status={this.props.status}/>
                <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold'}}>{this.props.name}</Text>
                    <Text>{this.props.email}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = dispatch => {
    return({
        success : state.followApp.followRequestReducer.success
    })
}

const mapDispatchToProps = dispatch => {
    return({
        followRequest : username => dispatch(followRequest(username))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FHContactItem);