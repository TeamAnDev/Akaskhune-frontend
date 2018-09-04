import React from 'react';
import {Component} from 'react';
import {View, FlatList, Text, Dimensions} from 'react-native';
import {Spinner, Icon} from 'native-base';
import HomeHeader from './Header';
import PostCard from './PostCard';
import {connect} from 'react-redux';
import colors from '../../config/colors';
import {feedsListRequest} from '../../actions/home/feedListsRequest';
const feeds = [{
    id : 1,
    user : "فرزاد حبیبی",
    profilePhotoUrl : "",
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
    profilePhotoUrl : "",
    created_at : "۳ ساعت پیش",
    location : "تهران",
    caption : "من یهویی",
    photo_url : "",
    likes_count : 100,
    comments_count : 20,
}]
const emptyPost  = () => (
    <View style={{flex:1, height:Dimensions.get("window").height*3/4,  justifyContent:'center', alignItems:'center'}}>
    <Text style={{padding : 10}} >
            هیچ پستی برای نمایش به شما وجود ندارد.
        </Text>
        <Icon name="camera-off" type="Feather" style={{fontSize: 60,}} />
        
        <Text style={{padding : 10}} >
            برای بارگزاری مجدد صفحه را پایین بکشید.
        </Text>
    </View>
)
class Home extends Component{
    constructor(props)
    {
        super(props);
        this.props.feedsListRequest();
        this.state={
            refresh : false,
        }
    }
    render()
    {
        return(
            <View style={{flex:1}}>
                <HomeHeader/>
                <FlatList
                    ListEmptyComponent = {emptyPost}
                    refreshing = {this.props.loading}
                    onRefresh = {() => this.props.feedsListRequest()}
                    style = {{backgroundColor: 'white',}}
                    data = {this.props.feeds}
                    renderItem = {({item}) =>
                    { let feed = item;
                    return <PostCard
                        id = {feed.id}
                        fullName = {feed.user}
                        profilePhotoUrl = {feed.profilePhotoUrl}
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