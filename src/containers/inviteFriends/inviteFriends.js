import React, {Component} from 'react';
import {Text, View, ListView, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import FHHeader from '../../components/FHHeader';
import FHInput from '../../components/FHInput';
import FHContactItem from '../../components/FHContactItem';
import {Icon} from 'native-base';
import FHContactsHeader from '../../components/FHContactsHeader';

class InviteFriends extends Component {

    constructor(props) {
        super(props);
    
        this.dataSource = undefined;
        
    }

    state = {data:[]};
    componentDidMount() {
        Contacts.getAll((err, contacts) => {
            let data = [];
            if(err === 'denied'){
                console.warn(err);
            } else {
                for (let i = 0; i < contacts.length; i++) {
                    if(contacts[i].emailAddresses.length !== 0) {
                        data.push({name: contacts[i].givenName + " " + contacts[i].familyName, phoneNumber:contacts[i].phoneNumbers[0].number});
                    }        
                }
            }
            this.setState({data})
        })
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.state.data);
        console.warn(this.state.data);
        return (
            <View style={{flex:1}}>
                <FHHeader navigation={this.props.navigation} title="دعوت از دوستان"/> 
                <View style={{flex:1}}>
                    <FHInput icon={<Icon type="Feather" name="search"/>} text="جستجوی مخاطب"/>
                    <ListView 
                        dataSource = {this.dataSource}
                        renderHeader = {() => <FHContactsHeader/>}
                        renderRow = {(rowData) => <FHContactItem name={rowData.name} phoneNumber={rowData.phoneNumber}/>}
                    />
                </View>
            </View>
        )
    }

}

export default InviteFriends;