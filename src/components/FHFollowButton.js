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
        if(this.state.following === 'followed') {
            this.props.unfollowRequest(this.props.username);
            this.setState({following : 'not_followed'});
        } else if(this.state.following === 'not_followed'){
            if(this.props.isPrivate) {
                this.props.followRequest(this.props.username);
                this.setState({following : 'requested'});
            } else {
                this.props.followRequest(this.props.username);
                this.setState({following : 'followed'});
            }
        }
    }

    render() {
        if(this.state.following === 'followed') {
            return <Button onPress={this.onPress} style={styles.contactButton}><Text style={{fontWeight:'bold', color:'white'}}>دنبال شده</Text></Button>;
        } else if(this.state.following === 'not_followed'){
            return <Button onPress={this.onPress} style={styles.contactButton} bordered><Text style={{fontWeight:'bold', color:colors.accentColor}}>دنبال کن</Text></Button>;
        } else if(this.state.following === 'requested') {
            return <Button onPress={this.onPress} style={styles.requested}><Text style={{fontWeight:'bold', color:'white'}}>درخواست شده</Text></Button>
        } else {
            return <View></View>
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