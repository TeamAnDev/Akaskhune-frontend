import React from 'react';
import {Component} from 'react';
import {View, FlatList, Text, Dimensions, RefreshControl} from 'react-native';
import {Spinner, Icon} from 'native-base';
import HomeHeader from './Header';
import PostCard from './PostCard';
import {connect} from 'react-redux';
import colors from '../../config/colors';
import {feedsListRequest, feedsListInitial} from '../../actions/home/feedListsRequest';
import {rest} from '../../config/urls';
import {emptyPost, emptyPostLoading} from './EmptyPost';


class Home extends Component{
    constructor(props)
    {
        super(props);
       
        this.state={
            refresh : false,
            feeds : [],
            shareVisible : false
        }
        this.refreshFeeds = this.refreshFeeds.bind(this);
    }
    refreshFeeds()
    {
        this.props.feedsListInitial();
        this.props.feedsListRequest(rest.feeds);
    }
    componentWillMount()
    {
        this.props.feedsListInitial();
        this.props.feedsListRequest(rest.feeds);
    }

    toggleShareVisible = () => {
        this.setState({shareVisible : !this.setState.shareVisible})
    }

    render()
    {
        console.warn(this.state.shareVisible)
        return(
            <View style={{flex:1}}>
                <HomeHeader/>
                <FlatList
                    ListEmptyComponent = {this.props.loading ? emptyPostLoading : emptyPost}
                    refreshControl = {
                       <RefreshControl
                       colors={[colors.accentColor]} 
                       tintColor={colors.accentColor} 
                       refreshing = {this.props.loading}
                       onRefresh = {this.refreshFeeds}
                       />
                    }
                    onEndReachedThreshold = {0.5}
                    onEndReached = {() => {if(!this.props.loading && !this.props.endLoading){this.props.feedsListRequest(this.props.url)}}}
                    style = {{backgroundColor: 'white',}}
                    data = {this.props.feeds}
                    ListFooterComponent = {this.props.endLoading ? <View style={{backgroundColor:'white'}}><Spinner/></View> : null}   
                    renderItem = {({item, index}) =>
                    { let feed = item;
                    return <PostCard
                        toggleShareVisible = {this.toggleShareVisible}
                        id = {feed.id}
                        fullName = {feed.user}
                        profilePhotoUrl = {feed.avatar_url}
                        time = {feed.created_at}
                        location = {feed.location}
                        caption = {feed.caption}
                        photoUrl = {feed.photo_url}
                        likesCount = {feed.likes_count}
                        commentsCount = {feed.comments_count}
                        is_liked = {feed.is_liked}
                        index = {index}
                        username = {feed.username}
                        isOwner = {feed.is_owner}/>}
                        
                     }/>
                {/* <ShareComponent visible={this.state.shareVisible}/> */}
            </View>
        )
    }
}


const mapStateToProps = state => {
    return({
        feeds : state.homeApp.feedsListReducer.feeds,
        loading : state.homeApp.feedsListReducer.loading,
        url : state.homeApp.feedsListReducer.url,
        endLoading : state.homeApp.feedsListReducer.endLoading,
    });
}

const mapDispatchToProps = dispatch => {
    return({
        feedsListRequest : (url) => dispatch(feedsListRequest(url)),
        feedsListInitial : () => dispatch(feedsListInitial()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);