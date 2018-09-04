import React from 'react';
import {Component} from 'react';
import {View, ListView} from 'react-native';
import HomeHeader from './Header';
import PostCard from './PostCard';

const feeds = [{
    id : 1,
    full_name : "فرزاد حبیبی",
    time : "۳ ساعت پیش",
    location : undefined,
    caption : "من یهویی",
    post_url : "",
    likes_count : 100,
    comments_count : 20,
}, 
{
    id : 1,
    full_name : "فرزاد حبیبی",
    time : "۳ ساعت پیش",
    location : undefined,
    caption : "من یهویی",
    post_url : "",
    likes_count : 100,
    comments_count : 20,
}]
export default class Home extends Component{
    constructor(props)
    {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            feeds : ds.cloneWithRows(feeds)
        }
    }

    render()
    {
        // const renderFeeds = this.state.feeds.map((feed, index) => (
        // <PostCard
        //     key = {index}
        //     id = {feed.id}
        //     fullName = {feed.full_name}
        //     time = {feed.time}
        //     location = {feed.location}
        //     caption = {feed.caption}
        //     postUrl = {feed.post_url}
        //     likesCount = {feed.likes_count}
        //     commentsCount = {feed.comments_count}/>
        // ));
        return(
            <View style={{flex:1}}>
                <HomeHeader/>
                <ListView
                    style = {{backgroundColor: 'white',}}
                    dataSource={this.state.feeds}
                    renderRow = {(feed) =>
                    <PostCard
                        id = {feed.id}
                        fullName = {feed.full_name}
                        time = {feed.time}
                        location = {feed.location}
                        caption = {feed.caption}
                        postUrl = {feed.post_url}
                        likesCount = {feed.likes_count}
                        commentsCount = {feed.comments_count}/>
                     }/>
                
            </View>
        )
    }
}