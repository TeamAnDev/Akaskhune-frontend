import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';

const FHTagItem = (props) => {
    return(
        <TouchableOpacity>
        <View style={styles.contactItem}>
            <View>
                <Text>{props.countOfUses}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginRight:10, alignItems:"flex-end"}}>
                    <Text style={{fontWeight:'bold'}}>{props.name}</Text>
                </View>
                <View>
                   <Icon type="Feather" name="hash"/>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default FHTagItem;