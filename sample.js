import React, {Component} from 'react';
import {SectionList, Text, PermissionsAndroid, View} from 'react-native';
import Contacts from 'react-native-contacts';


export default class Sample extends Component {

    constructor(props) {
        super(props);
        this.emails = [];
    }

    render() {
        // PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        //         'title': 'shit',
        //         'message': 'shit'
        //     }
        // ).then(() => {
        //     Contacts.getAll((err, contacts) => {
        //         if(err === 'denied'){
        //             console.warn(err);
        //         } else {
        //             console.warn(contacts[0]);
        //         }
        //     })
        // })
        return (
            <View style={{flex:1}}>
                <SectionList
                renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({section: {title}}) => (
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                )}
                sections={[
                {title: 'Title1', data: ['item1', 'item2']},
                {title: 'Title2', data: ['item3', 'item4']},
                {title: 'Title3', data: ['item5', 'item6']},
                ]}
                keyExtractor={(item, index) => item + index}
            />
          </View>
        );
    }
}