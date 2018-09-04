import React from 'react';
import {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {Spinner} from 'native-base';
import HomeHeader from './Header';
import PostCard from './PostCard';
import {connect} from 'react-redux';
import colors from '../../config/colors';
import {feedsListRequest} from '../../actions/home/feedListsRequest';
const feeds = [{
    id : 1,
    user : "فرزاد حبیبی",
    created_at : "۳ ساعت پیش",
    location : undefined,
    caption : "من یهویی",
    photo_url : "",
    likes_count : 100,
    comments_count : 20,
}, 
{
    id : 1,
    user : "فرزاد حبیبی",
    created_at : "۳ ساعت پیش",
    location : "تهران",
    caption : "من یهویی",
    photo_url : "",
    likes_count : 100,
    comments_count : 20,
}]
class Home extends Component{
    constructor(props)
    {
        super(props);
        this.props.feedsListRequest();
    }
    render()
    {
      
        const renderLoading = this.props.loading ? <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
            <Spinner style={{alignSelf:'center'}} color={colors.accentColor}/>
            <Text>در حال بارگزاری اطلاعات</Text>
        </View>  : <View></View>;
        return(
            <View style={{flex:1}}>
                <HomeHeader/>
                {renderLoading}
                <FlatList
                    style = {{backgroundColor: 'white',}}
                    data = {this.props.feeds}
                    renderItem = {({item}) =>
                    { let feed = item;
                    return <PostCard
                        id = {feed.id}
                        fullName = {feed.user}
                        time = {feed.created_at}
                        location = {feed.location}
                        caption = {feed.caption}
                        photoUrl = {feed.photo_url}
                        likesCount = {feed.likes_count}
                        commentsCount = {feed.comments_count}/>}
                     }/>
                
            </View>
        )
    }
}


const mapStateToProps = state => {
    return({
        feeds : state.homeApp.feedsListReducer.feeds,
        loading : state.homeApp.feedsListReducer.loading
    });
}

const mapDispatchToProps = dispatch => {
    return({
        feedsListRequest : () => dispatch(feedsListRequest())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);