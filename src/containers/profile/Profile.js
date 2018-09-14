import React from 'react';
import {Component} from 'react';
import Info from './Info';
import ProfileHeader from './Header';
import {View, ScrollView, RefreshControl, Dimensions} from 'react-native';
import TabBox from './TabBox';
import {getSelfInfo, getSelfInfoInit} from '../../actions/userInfo/userInfoRequest';
import {connect} from 'react-redux';
import {requestImages, imageRequestInit} from '../../actions/profile/profileRequest';
import {allBoardsRequest, initAllBoards} from '../../actions/board/boardRequest';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.props.initSelfInfo();
        this.props.navigation.addListener("didFocus", () => {
            this.props.getSelfInfo();
          })
        
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ProfileHeader navigation={this.props.navigation} user_name={this.props.username} isSelf = {true}/>
                <View style={{flex:1}}>
                    <View style={{flex:105, marginTop:10}}>
                        <Info
                            fullname = {this.props.fullname}
                            username = {this.props.username}
                            bio = {this.props.bio}
                            follower_count = {this.props.follower_count}
                            following_count = {this.props.following_count}
                            avatar = {this.props.avatar}
                            is_private = {false}
                            status = {"followed"}
                            isOthers = {false}
                            />
                    </View>
                    <View style={{flex:350}}>
                        <TabBox
                            posts_count = {this.props.posts_count}
                            boards_count = {this.props.boards_count}

                            images = {this.props.images}
                            imagesSuccess = {this.props.imagesSuccess}
                            imagesLoading = {this.props.imagesLoading}
                            url = {this.props.url}
                            requestImages = {this.props.requestImages}
                            init = {this.props.init}

                            boardsLoading = {this.props.boardsLoading}
                            boardsSuccess = {this.props.boardsSuccess}
                            error = {this.props.error}
                            boards = {this.props.boards}
                            next = {this.props.next}
                            allBoardsRequest = {this.props.allBoardsRequest}
                            initAllBoards = {this.props.initAllBoards}

                            is_private = {false}
                            status = {"followed"}
                            />
                    </View>
                </View>
            </View>
        )
    }

}
const mapStateToProps = state => {
    return({
        fullname : state.userInfoApp.getSelfInfoReducer.data.fullname,
        bio : state.userInfoApp.getSelfInfoReducer.data.bio,
        username : state.userInfoApp.getSelfInfoReducer.data.username,
        follower_count : state.userInfoApp.getSelfInfoReducer.data.follower_count,
        following_count : state.userInfoApp.getSelfInfoReducer.data.following_count,
        avatar : state.userInfoApp.getSelfInfoReducer.data.avatar,
        posts_count : state.userInfoApp.getSelfInfoReducer.data.posts_count,
        boards_count : state.userInfoApp.getSelfInfoReducer.data.boards_count,
        is_private : state.userInfoApp.getSelfInfoReducer.data.boards_count,
        
        images : state.profileApp.imagesRequestReducer.images,
        imagesSuccess : state.profileApp.imagesRequestReducer.success,
        imagesLoading : state.profileApp.imagesRequestReducer.loading,
        url : state.profileApp.imagesRequestReducer.url,

        boardsLoading : state.boardsApp.allBoardsRequestReducer.loading,
        boardsSuccess : state.boardsApp.allBoardsRequestReducer.success,
        error : state.boardsApp.allBoardsRequestReducer.error,
        boards : state.boardsApp.allBoardsRequestReducer.boards,
        next : state.boardsApp.allBoardsRequestReducer.next
        
    });
}

const mapDispatchToProps = dispatch => {
    return({
        initSelfInfo : () => dispatch(getSelfInfoInit()),
       getSelfInfo : (username) => dispatch(getSelfInfo(username)),
       requestImages : (url) => dispatch(requestImages(url)),
        init : () => dispatch(imageRequestInit()),
        allBoardsRequest : (url) => dispatch(allBoardsRequest(url)),
        initAllBoards : () => dispatch(initAllBoards()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);