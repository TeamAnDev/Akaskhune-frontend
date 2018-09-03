import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { Button } from 'native-base';

function getButtonText(status) {
    switch(status) {
        case "NOT_INVITED" :
            return "دعوت";
        case "INVITED" :
            return "دعوت شده";    
        case "NOT_FOLLOWED" :
            return "دنبال کن";
        case "FOLLOWED" :
            return "دنبال شده";
    }
}

const ActionButton = (props) => {
    switch(props.status) {
        case "NOT_INVITED" :
            return <Button transparent dark><Text>{getButtonText(props.status)}</Text></Button>;
        case "INVITED" :
            return <Button transparent light><Text>{getButtonText(props.status)}</Text></Button>;    
        case "NOT_FOLLOWED" :
            return <Button bordered dark><Text>{getButtonText(props.status)}</Text></Button>;
        case "FOLLOWED" :
            return <Button dark><Text>{getButtonText(props.status)}</Text></Button>;
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