import React , {Component} from 'react';
import {Text} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';
import colors from '../config/colors';
import {connect} from 'react-redux';
import {followRequest, unfollowRequest} from '../actions/follow/followRequest';
import {inviteRequest} from '../actions/inviteFriends/inviteFriendsRequest';

class FHActionButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {status : this.props.status};
    }

    getButtonText = (status) => {
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

    onPress = () => {
        if(this.state.status === 'not_followed') {
            this.props.followRequest(this.props.username);
            this.setState({status : 'followed'});
        } else if(this.state.status === 'followed') {
            this.props.unfollowRequest(this.props.username);
            this.setState({status : 'not_followed'});
        } else if(this.state.status === 'not_invited') {
            this.props.inviteRequest(this.props.email);
            this.setState({status : 'invited'});
        }
    }

    render() {
        switch(this.state.status) {
            case "not_invited" :
                return <Button onPress={this.onPress} style={styles.contactButton} transparent dark><Text style={{fontWeight:'bold'}}>{this.getButtonText(this.state.status)}</Text></Button>;
            case "invited" :
                return <Button onPress={this.onPress} style={styles.contactButton} transparent light><Text style={{fontWeight:'bold'}}>{this.getButtonText(this.state.status)}</Text></Button>;    
            case "not_followed" :
                return <Button onPress={this.onPress} style={styles.contactButton} bordered><Text style={{fontWeight:'bold', color:colors.accentColor}}>{this.getButtonText(this.state.status)}</Text></Button>;
            case "followed" :
                return <Button onPress={this.onPress} style={styles.contactButton}><Text style={{fontWeight:'bold', color:'white'}}>{this.getButtonText(this.state.status)}</Text></Button>;
            default :
                return <Button transparent dark><Text>{this.getButtonText(this.state.status)}</Text></Button>;
    
        }
    }
}

const mapStateToProps = state => {
    return({
        followSuccess : state.followApp.followRequestReducer.followSuccess,
        unfollowSuccess : state.followApp.unfollowRequestReducer.unfollowSuccess,
        inviteSuccess : state.inviteFriendsApp.inviteContactRequestReducer.inviteSuccess
    })
}

const mapDispatchToProps = dispatch => {
    return({
        followRequest : username => dispatch(followRequest(username)),
        unfollowRequest : username => dispatch(unfollowRequest(username)),
        inviteRequest : email => dispatch(inviteRequest(email))
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(FHActionButton);