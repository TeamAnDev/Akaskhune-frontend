import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import FHPeopleItem from '../../components/FHPeopleItem';
import FHHeader from '../../components/FHHeader';
import FHInput from '../../components/FHInput';
import {Icon} from 'native-base';
import {requestFollowingsList} from '../../actions/peopleList/followingsListRequest'
import {connect} from 'react-redux';

class FollowingsList extends Component {
    constructor(props) {
        super(props);
        this.props.requestFollowingsList();
    }

    render() {
        console.warn(this.props.followings);
        this.data = [{username:"aaa",name:"ششش"},{username:"aaa",name:"ششش"},{username:"aaa",name:"ششش"},{username:"aaa",name:"ششش"}]
        return (
            <View style={{backgroundColor: 'white', flex:1}}>
                <FHHeader title={"دنبال شده ها"}/>
                <FHInput width={'95%'} icon={<Icon type="Feather" name="search"/>} text="جستجوی دنبال شده ها"/>
                <FlatList 
                data = {this.data}
                renderItem = {({item}) => <FHPeopleItem username={item.username} name={item.name}/>}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return({
        loading : state.followingsApp.followingsRequestReducer.loading,
        followings : state.followingsApp.followingsRequestReducer.followings,
        error : state.followingsApp.followingsRequestReducer.error
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestFollowingsList : () => dispatch(requestFollowingsList())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingsList);