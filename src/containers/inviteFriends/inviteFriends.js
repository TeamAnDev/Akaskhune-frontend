import React, {Component} from 'react';
import {Text, View, ListView, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import FHHeader from '../../components/FHHeader';
import FHInput from '../../components/FHInput';
import FHContactItem from '../../components/FHContactItem';
import {Icon} from 'native-base';
import FHContactsHeader from '../../components/FHContactsHeader';
import {changeFilter} from '../../actions/inviteFriends/inviteFriendsAction';
import {connect} from 'react-redux';

class InviteFriends extends Component {

    constructor(props) {
        super(props);
        this.dataSource = undefined;
        this.state = {data:[]};
    }

    getContacts(err, contacts) {
        let data = [];
        if(err === 'denied'){
            console.warn(err);
        } else {
            for (let i = 0; i < contacts.length; i++) {
                if(contacts[i].emailAddresses.length !== 0) {
                    data.push({name: contacts[i].givenName + " " + contacts[i].familyName, email:contacts[i].emailAddresses[0].email});
                }        
            }
        }
        this.setState({data})
    }

    componentDidMount() {
        Contacts.getAll((err, contacts) => {
            this.getContacts(err, contacts)
        })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.filter !== nextProps.filter) {
            if(this.props.filter !== "") {
                Contacts.getContactsMatchingString(nextProps.filter,(err, contacts) => {
                    this.getContacts(err, contacts);
                })
            } else {
                Contacts.getAll((err, contacts) => {
                    this.getContacts(err, contacts);
                })
            }
        }
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.state.data);
        console.warn(this.props.filter);
        console.warn(this.state.data);
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <FHHeader navigation={this.props.navigation} title="دعوت از دوستان"/> 
                <View style={{flex:1, justifyContent:'center'}}>
                    <FHInput width={'95%'} icon={<Icon type="Feather" name="search"/>} text="جستجوی مخاطب"
                    onTextChange={this.props.changeFilter}/>
                    <ListView 
                        dataSource = {this.dataSource}
                        renderHeader = {() => <FHContactsHeader/>}
                        renderRow = {(rowData) => <FHContactItem name={rowData.name} email={rowData.email}/>}
                    />
                </View>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    filter : state.inviteFriendsApp.changeFilterReducer.filter
})

const mapDispatchToProps = dispatch => ({
    changeFilter : filter => dispatch(changeFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(InviteFriends);