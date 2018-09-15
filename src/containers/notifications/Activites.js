import React, {Component} from 'react';
import {View, FlatList,Text, Dimensions, RefreshControl} from 'react-native';
import PostLikeOrCommentNotif from './PostLikeOrCommentNotif';
import FollowNotif from './FollowNotif';
import RequestNotif from './RequestNotif';
import AcceptOrRejectNotif from './AcceptOrRejectNotif';
import {emptyPostLoading} from '../home/EmptyPost';
import EmptyNotificationsList from './EmptyNoficationsList';
import colors from '../../config/colors';
const heightOfDayTitle = Dimensions.get('window').height *43/640;
export default class Activities extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <View style={{flex:1}}>
        <FlatList
        data = {this.props.data}
        ListEmptyComponent = {this.props.loading ? emptyPostLoading : <EmptyNotificationsList/>}
        refreshControl ={<RefreshControl
          colors={[colors.accentColor]} 
          tintColor={colors.accentColor} 
          refreshing = {this.props.loading}
          onRefresh = {this.props.refresh}
          />}
        renderItem={({item}) =>{
          if(item.type === 'like' || item.type === 'comment')
            return <PostLikeOrCommentNotif
              userName = {item.fullname}
              time = {item.time}
              status = {item.type}
              postId = {item.post_id}
              photoUrl = {item.photo_url}
              commentText = {item.comment_text}/>
          else if(item.type === 'follow')
            return <FollowNotif
              name = {item.fullname}
              time = {item.time}
              userId = {item.user_id}
              username = {item.username}
              following = {item.follow_status}
              avatarUrl = {item.avatar_url}
              isPrivate = {item.isPrivate}
              secondName = {item.second_fullname}/>
          else if(item.type === 'day')
            return <View style={{height:heightOfDayTitle, borderBottomColor : colors.grey, borderBottomWidth:1, 
                                  justifyContent : 'center', }}>
                      <Text style = {{textAlign : 'right', paddingRight : heightOfDayTitle/3, color:'black'}}>{item.name}</Text>
                    </View>
          else 
              return <View/>          
        }}
      />
        </View>
    }
}