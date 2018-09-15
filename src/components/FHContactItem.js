import React , {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {navigateToProfile} from '../../NavigationService';
import FHActionButton from './FHActionButton';
class FHContactItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity 
            onPress={()=>
            { this.props.status === 'followed' || this.props.status === 'not_followed' || this.props.status === 'requested' ?
             navigateToProfile(this.props.username, this.props.ownUsername) : null}}>
            <View style={styles.contactItem}>
                <FHActionButton status={this.props.status} username={this.props.username} email={this.props.email}/>
                <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold'}}>{this.props.name}</Text>
                    <Text>{this.props.email}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}
const mapStateToProps = state => {
    return({
        ownUsername : state.userInfoApp.getSelfInfoReducer.data.username,
    })
}
export default connect(mapStateToProps, null)(FHContactItem);