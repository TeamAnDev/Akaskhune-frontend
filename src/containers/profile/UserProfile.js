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
        this.username = this.props.navigation.getParam('username');
        this.props.getUserInfo(this.props.navigation.getParam('username'));
    }
    render() {
        let userData = Object.assign({} ,this.props.userData[this.props.navigation.getParam('username')]);
        let imagesData = Object.assign({}, this.props.imagesData[this.props.navigation.getParam('username')]);
        let images = imagesData.images;
        let url = imagesData.url;
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
                            fullname = {userData.fullname}
                            bio = {userData.bio}
                            follower_count = {userData.follower_count}
                            following_count = {userData.following_count}
                            avatar = {userData.avatar}
                            is_private = {userData.is_private}
                            status = {userData.follow_status}
                            isOthers = {true}
                            />
                    </View>
                    <View style={{flex:350}}>
                        <TabBox 
                            username = {this.props.navigation.getParam('username')}

                            boards_count = {userData.boards_count}
                            posts_count = {userData.posts_count}

                            images = { images ? images : []}
                            imagesSuccess = {this.props.imagesSuccess}
                            imagesLoading = {this.props.imagesLoading}
                            url = { url}
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
        userData : state.userInfoApp.getUserInfoReducer.data,


        imagesData : state.profileApp.othersImagesRequestReducer.data,
        // images : state.profileApp.othersImagesRequestReducer.images,
        imagesSuccess : state.profileApp.othersImagesRequestReducer.success,
        imagesLoading : state.profileApp.othersImagesRequestReducer.loading,
        // url : state.profileApp.othersImagesRequestReducer.url,

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
       requestImages : (url, username) => dispatch(requestOthersImages(url, username)),
        init : (username) => dispatch(imageOtherRequestInit(username)),
        allBoardsRequest : (url) => dispatch(othersAllBoardsRequest(url)),
        initAllBoards : () => dispatch(initOthersAllBoards()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);