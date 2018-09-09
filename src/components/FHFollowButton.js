import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';
import colors from '../config/colors';
import {followRequest, unfollowRequest} from '../actions/follow/followRequest';
import {connect} from 'react-redux';

class FHFollowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {following : this.props.following};
    }

    onPress = () => {
        if(this.state.following) {
            this.props.unfollowRequest(this.props.username);
            this.setState({following : false});
        } else {
            this.props.followRequest(this.props.username);
            this.setState({following : true});
        }
    }

    render() {
        if(this.state.following) {
            return <Button onPress={this.onPress} style={styles.contactButton}><Text style={{fontWeight:'bold', color:'white'}}>دنبال شده</Text></Button>;
        } else {
            return <Button onPress={this.onPress} style={styles.contactButton} bordered><Text style={{fontWeight:'bold', color:colors.accentColor}}>دنبال کن</Text></Button>;
        }
    }
}

const mapStateToProps = state => {
    return({
        followSuccess : state.followApp.followRequestReducer.followSuccess,
        unfollowSuccess : state.followApp.unfollowRequestReducer.unfollowSuccess
    })
}

const mapDispatchToProps = dispatch => {
    return({
        followRequest : username => dispatch(followRequest(username)),
        unfollowRequest : username => dispatch(unfollowRequest(username))
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(FHFollowButton);