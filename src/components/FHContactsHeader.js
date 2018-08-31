import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const FHContactsHeader = (props) => {
    return (
        <View style={styles.contactItem}>
            <Text>دعوت از همه</Text>
            <Text>لیست مخاطبان</Text>
        </View>
    )
}

export default FHContactsHeader;