import React, {Component} from 'react';
import {Spinner} from 'native-base';
import {Text, View, ListView, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import FHHeader from '../../components/FHHeader';
import FHInput from '../../components/FHInput';
import FHContactItem from '../../components/FHContactItem';
import {Icon} from 'native-base';
import FHContactsHeader from '../../components/FHContactsHeader';
import {changeFilter} from '../../actions/inviteFriends/inviteFriendsAction';
import {connect} from 'react-redux';
import {contactsRequest} from '../../actions/inviteFriends/inviteFriendsRequest'
import colors from '../../config/colors';
class InviteFriends extends Component {

    constructor(props) {
        super(props);
        this.dataSource = undefined;
        this.state = {data:[], allContacts: []};
    }

    getAllContactsWithStatus(err, contacts) {
        let allContacts = [];
        if(err === 'denied'){
            console.warn(err);
        } else {
            for (let i = 0; i < contacts.length; i++) {
                if(contacts[i].emailAddresses.length !== 0) {
                    let contact = {name:"", email:contacts[i].emailAddresses[0].email};
                    if(contacts[i].familyName !== null) {
                        contact.name = contacts[i].givenName + " " + contacts[i].familyName;
                    } else {
                        contact.name = contacts[i].givenName; 
                    }
                    allContacts.push(contact);
                }        
            }
        }
        this.setState({allContacts});
    }

    filterContacts(err, contacts) {
        console.warn(contacts);
        let data = [];
        if(err === 'denied'){
            console.warn(err);
        } else {
            for (let i = 0; i < this.props.contacts.length; i++) {
                console.warn("Hey");
                let flag = false;
                for (let j = 0; j < contacts.length; j++) {
                    if(contacts[j].emailAddresses.length !== 0) {
                        if(this.props.contacts[i].email === contacts[j].emailAddresses[0].email) {
                            flag = true;
                            break;
                        }
                    }
                }
                if(flag) {
                    data.push(this.props.contacts[i]);
                }
            }
        }
        this.setState({data});
    }

    componentDidMount() {
        Contacts.getAll((err, contacts) => {
            this.getAllContactsWithStatus(err, contacts);
            this.props.contactsRequest(this.state.allContacts)
        })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.success !== nextProps.success && this.props.success === false) {
            this.setState({data: nextProps.contacts})
        }
        if(this.props.filter !== nextProps.filter) {
            if(nextProps.filter !== "") {
                Contacts.getContactsMatchingString(nextProps.filter,(err, contacts) => {
                    this.filterContacts(err, contacts);
                })
            } else {
                this.setState({data : this.props.contacts});
            }
        }
    }

    render() {
        console.warn(this.props.contacts);
        let toReturn;
        if(this.props.loading) {
            toReturn = <View style={{flex:1, backgroundColor:'white'}}>
                            <FHHeader navigation={this.props.navigation} title="دعوت از دوستان"/> 
                            <Spinner style={{alignSelf:'center'}} color={colors.accentColor}/>
                        </View> 
        } else if(this.props.success) {
            const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
            this.dataSource = ds.cloneWithRows(this.state.data);
            toReturn = <View style={{flex:1, backgroundColor:'white'}}>
                        <FHHeader navigation={this.props.navigation} title="دعوت از دوستان"/> 
                        <View style={{flex:1, justifyContent:'center'}}>
                            <FHInput width={'95%'} icon={<Icon type="Feather" name="search"/>} text="جستجوی مخاطب"
                            onTextChange={this.props.changeFilter}/>
                            <ListView 
                                dataSource = {this.dataSource}
                                renderHeader = {() => <FHContactsHeader/>}
                                renderRow = {(rowData) => <FHContactItem name={rowData.name} email={rowData.email} status={rowData.status}/>}
                            />
                        </View>
                    </View>
        } else {
            toReturn = <Text>{this.props.error}</Text>
        }
        return toReturn;
    }

}

const mapStateToProps = state => ({
    filter : state.inviteFriendsApp.changeFilterReducer.filter,
    contacts : state.inviteFriendsApp.contactsRequestReducer.contacts,
    loading : state.inviteFriendsApp.contactsRequestReducer.loading,
    error : state.inviteFriendsApp.contactsRequestReducer.err,
    success : state.inviteFriendsApp.contactsRequestReducer.success
})

const mapDispatchToProps = dispatch => ({
    changeFilter : filter => dispatch(changeFilter(filter)),
    contactsRequest : contacts => dispatch(contactsRequest(contacts))
})

export default connect(mapStateToProps, mapDispatchToProps)(InviteFriends);