import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import FHPeopleItem from '../../components/FHPeopleItem';
import FHHeader from '../../components/FHHeader';
import FHInput from '../../components/FHInput';
import {Icon, Spinner} from 'native-base';
import colors from '../../config/colors'
import {requestFollowingsList} from '../../actions/peopleList/followingsListRequest'
import {connect} from 'react-redux';

class FollowingsList extends Component {
    constructor(props) {
        super(props);
        this.props.requestFollowingsList();
    }

    render() {
        console.warn(this.props.followings);
        let toReturn;
        if(this.props.success) {
            toReturn = <View style={{backgroundColor: 'white', flex:1}}>
                            <FHHeader title={"دنبال شده ها"}/>
                            <FHInput width={'95%'} icon={<Icon type="Feather" name="search"/>} text="جستجوی دنبال شده ها"/>
                            <FlatList 
                            data = {this.props.followings}
                            renderItem = {({item}) => <FHPeopleItem username={item.username} name={item.fullname} avatar={item.avatar} following={item.following}/>}
                            />
                        </View>
        } else if(this.props.loading) {
            toReturn = <View style={{backgroundColor: 'white', flex:1}}>
                            <FHHeader title={"دنبال شده ها"}/>
                            <Spinner style={{alignSelf:'center'}} color={colors.accentColor}/>
                        </View>
        } else (
            toReturn = <View><Text>error</Text></View>
        )
        return (
            toReturn
        )
    }
}

const mapStateToProps = state => {
    return({
        loading : state.followingsApp.followingsRequestReducer.loading,
        followings : state.followingsApp.followingsRequestReducer.followings,
        error : state.followingsApp.followingsRequestReducer.error,
        success : state.followingsApp.followingsRequestReducer.success
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestFollowingsList : () => dispatch(requestFollowingsList())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingsList);