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
import {PulseIndicator} from 'react-native-indicators';
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
const emptyPostLoading = () => (
    <View style={{flex:1, height:Dimensions.get("window").height*3/4,  justifyContent:'center', alignItems:'center'}}>
        <View style={{ height:80, width:80}}>
        <PulseIndicator count={8} size={70} color={colors.accentColor}/>
        </View>
        <Text>در حال دریافت اطلاعات</Text>
    </View>
)
class Home extends Component{
    constructor(props)
    {
        super(props);
       
        this.state={
            refresh : false,
            feeds : []
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
    render()
    {
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
                        index = {index}/>}
                        
                     }/>
        
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