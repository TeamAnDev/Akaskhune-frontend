import React , {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import FHRow from '../../components/FHRow';
import FHHeader from '../../components/FHHeader';

class TagPosts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex:1}}>
                <FHHeader title="#برگهایم"/>
            </View>
        )
    }
}

export default TagPosts;