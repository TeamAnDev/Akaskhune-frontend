import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const FHContactItem = (props) => {
    return (
        <View style={styles.contactItem}>
            <Text style={{fontWeight: 'bold'}}>دعوت</Text>
            <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                <Text style={{fontWeight:'bold'}}>{props.name}</Text>
                <Text>{props.email}</Text>
            </View>
        </View>
    )
}

export default FHContactItem;