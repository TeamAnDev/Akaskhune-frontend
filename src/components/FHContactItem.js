import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const FHContactItem = (props) => {
    return (
        <View style={styles.contactItem}>
            <Text>دعوت</Text>
            <View style={{flexDirection:'column'}}>
                <Text>{props.name}</Text>
                <Text>{props.phoneNumber}</Text>
            </View>
        </View>
    )
}

export default FHContactItem;