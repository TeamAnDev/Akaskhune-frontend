import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import FHPeopleItem from '../../components/FHPeopleItem';
import FHHeader from '../../components/FHHeader';
import FHInput from '../../components/FHInput';
import {Icon, Spinner} from 'native-base';
import {requestFollowersList} from '../../actions/peopleList/followersListRequest';
import {connect} from 'react-redux';
import colors from '../../config/colors';

class FollowersList extends Component {
    constructor(props) {
        super(props);
        
        this.props.requestFollowersList(this.props.navigation.getParam('username'));
    }

    render() {
        let toReturn;
        if(this.props.success) {
            toReturn = <View style={{backgroundColor: 'white', flex:1}}>
                            <FHInput width={'95%'} icon={<Icon type="Feather" name="search"/>} text="جستجوی دنبال کننده ها"/>
                            <FlatList 
                            data = {this.props.followers}
                            renderItem = {({item}) => <FHPeopleItem isPrivate={item.isPrivate} username={item.username} name={item.fullname} avatar={item.avatar} following={item.follow_status}/>}
                            />
                        </View>
        } else if(this.props.loading) {
            toReturn = <View style={{backgroundColor: 'white', flex:1}}>
                            
                            <Spinner style={{alignSelf:'center'}} color={colors.accentColor}/>
                        </View>
        } else (
            toReturn = <View><Text>error</Text></View>
        )
        return (
            <View style={{backgroundColor: 'white', flex:1}}>
                <FHHeader title={"دنبال کننده ها"}/>
                {toReturn}
            </View>
            
        )
    }
}

const mapStateToProps = state => {
    return({
        loading : state.followersApp.followersRequestReducer.loading,
        followers : state.followersApp.followersRequestReducer.followers,
        error : state.followersApp.followersRequestReducer.error,
        success : state.followersApp.followersRequestReducer.success
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestFollowersList : (username) => dispatch(requestFollowersList(username))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersList);