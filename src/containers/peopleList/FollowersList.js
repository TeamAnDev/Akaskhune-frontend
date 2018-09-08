import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import FHPeopleItem from '../../components/FHPeopleItem';
import FHHeader from '../../components/FHHeader';
import FHInput from '../../components/FHInput';
import {Icon} from 'native-base';
import {requestFollowersList} from '../../actions/peopleList/followersListRequest';
import {connect} from 'react-redux';

class FollowersList extends Component {
    constructor(props) {
        super(props);
        this.props.requestFollowersList();
    }

    render() {
        this.data = [{username:"aaa",name:"ششش"},{username:"aaa",name:"ششش"},{username:"aaa",name:"ششش"},{username:"aaa",name:"ششش"}]
        return (
            <View style={{backgroundColor: 'white', flex:1}}>
                <FHHeader title={"دنبال کننده ها"}/>
                <FHInput width={'95%'} icon={<Icon type="Feather" name="search"/>} text="جستجوی دنبال کننده ها"/>
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
        loading : state.followersApp.followersRequestReducer.loading,
        followers : state.followersApp.followersRequestReducer.followers,
        error : state.followersApp.followersRequestReducer.error,
        success : state.followersApp.followersRequestReducer.success
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestFollowersList : () => dispatch(requestFollowersList())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersList);