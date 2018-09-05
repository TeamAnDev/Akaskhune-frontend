import React , {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import FHActionButton from './FHActionButton';
class FHContactItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.contactItem}>
                <FHActionButton status={this.props.status} username={this.props.username}/>
                <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold'}}>{this.props.name}</Text>
                    <Text>{this.props.email}</Text>
                </View>
            </View>
        )
    }
}

export default FHContactItem;