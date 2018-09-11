import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';
import {navigate} from '../../NavigationService';
import { tagName } from "../actions/tagPosts/tagPostsRequest";
import {connect} from 'react-redux';

class FHTagItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity onPress={() => {this.props.tagName(this.props.name);navigate("TagPosts")}}>
                <View style={styles.contactItem}>
                    <View>
                        <Text>{this.props.countOfUses}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center', marginRight:10, alignItems:"flex-end"}}>
                            <Text style={{fontWeight:'bold'}}>{this.props.name}</Text>
                        </View>
                        <View>
                        <Icon type="Feather" name="hash"/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return({
        tagName : name => dispatch(tagName(name))
    })
}

export default connect(null, mapDispatchToProps)(FHTagItem);