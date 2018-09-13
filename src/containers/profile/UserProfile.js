import React from 'react';
import {Component} from 'react';
import Info from './Info';
import ProfileHeader from './Header';
import {View, ScrollView, RefreshControl, Dimensions} from 'react-native';
import TabBox from './TabBox';
import {getUserInfo} from '../../actions/userInfo/userInfoRequest';
import {connect} from 'react-redux';
import {imageOtherRequestInit, requestOthersImages} from '../../actions/profile/othersImages';
import {initOthersAllBoards, othersAllBoardsRequest} from '../../actions/board/othersBoardRequest';
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.props.getUserInfo(this.props.navigation.getParam('username'));
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ProfileHeader 
                navigation={this.props.navigation} 
                user_name = {this.props.navigation.getParam('username')}
                isSelf = {false}/>
                <View style={{flex:1}}>
                    <View style={{flex:105, marginTop:10}}>
                        <Info  
                            username = {this.props.navigation.getParam('username')}
                            fullname = {this.props.fullname}
                            bio = {this.props.bio}
                            follower_count = {this.props.follower_count}
                            following_count = {this.props.following_count}
                            avatar = {this.props.avatar}
                            is_private = {this.props.is_private}
                            status = {this.props.status}
                            isOthers = {true}
                            />
                    </View>
                    <View style={{flex:350}}>
                        <TabBox 
                            username = {this.props.navigation.getParam('username')}

                            boards_count = {this.props.boards_count}
                            posts_count = {this.props.posts_count}

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
                            
                            is_private = {this.props.is_private}
                            status = {this.props.status}
                            />
                    </View>
                </View>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return({
        fullname : state.userInfoApp.getUserInfoReducer.data.fullname,
        bio : state.userInfoApp.getUserInfoReducer.data.bio,
        follower_count : state.userInfoApp.getUserInfoReducer.data.follower_count,
        following_count : state.userInfoApp.getUserInfoReducer.data.following_count,
        avatar : state.userInfoApp.getUserInfoReducer.data.avatar,
        posts_count : state.userInfoApp.getUserInfoReducer.data.posts_count,
        boards_count : state.userInfoApp.getUserInfoReducer.data.boards_count,
        is_private : state.userInfoApp.getUserInfoReducer.data.is_private,
        status : state.userInfoApp.getUserInfoReducer.data.follow_status,

        images : state.profileApp.othersImagesRequestReducer.images,
        imagesSuccess : state.profileApp.othersImagesRequestReducer.success,
        imagesLoading : state.profileApp.othersImagesRequestReducer.loading,
        url : state.profileApp.othersImagesRequestReducer.url,

        boardsLoading : state.boardsApp.othersAllBoardsRequestReducer.loading,
        boardsSuccess : state.boardsApp.othersAllBoardsRequestReducer.success,
        error : state.boardsApp.othersAllBoardsRequestReducer.error,
        boards : state.boardsApp.othersAllBoardsRequestReducer.boards,
        next : state.boardsApp.othersAllBoardsRequestReducer.next

    });
}

const mapDispatchToProps = dispatch => {
    return({
       getUserInfo : (username) => dispatch(getUserInfo(username)),
       requestImages : (url) => dispatch(requestOthersImages(url)),
        init : () => dispatch(imageOtherRequestInit()),
        allBoardsRequest : (url) => dispatch(othersAllBoardsRequest(url)),
        initAllBoards : () => dispatch(initOthersAllBoards()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);