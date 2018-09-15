import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { Button } from 'native-base';

const FHContactsHeader = (props) => {
    return (
        <View style={styles.contactItem}>
            <Button style={styles.contactButton} transparent dark><Text style={{fontWeight:'bold'}}></Text></Button>
            <Text>لیست مخاطبان</Text>
        </View>
    )
}

export default FHContactsHeader;