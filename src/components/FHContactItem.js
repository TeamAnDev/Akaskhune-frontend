import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { Button } from 'native-base';

function getButtonText(status) {
    switch(status) {
        case "not_invited" :
            return "دعوت";
        case "invited" :
            return "دعوت شده";    
        case "not_followed" :
            return "دنبال کن";
        case "followed" :
            return "دنبال شده";
    }
}

const ActionButton = (props) => {
    switch(props.status) {
        case "not_invited" :
            return <Button style={styles.contactButton} transparent dark><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;
        case "invited" :
            return <Button style={styles.contactButton} transparent light><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;    
        case "not_followed" :
            return <Button style={styles.contactButton} bordered dark><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;
        case "followed" :
            return <Button style={styles.contactButton} dark><Text style={{fontWeight:'bold'}}>{getButtonText(props.status)}</Text></Button>;
        default :
            return <Button transparent dark><Text>{getButtonText(props.status)}</Text></Button>;

    }
}

const FHContactItem = (props) => {
    return (
        <View style={styles.contactItem}>
            <ActionButton status={props.status}/>
            <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                <Text style={{fontWeight:'bold'}}>{props.name}</Text>
                <Text>{props.email}</Text>
            </View>
        </View>
    )
}

export default FHContactItem;