import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Row from './Row';
import FHHeader from '../../components/FHHeader';
import FHButton from '../../components/FHButton';
import styles from './styles';
import {requestImages, imageRequestInit} from '../../actions/profile/profileRequest';
import {rest} from '../../config/urls';
import rowSplit from '../../components/Functions/rowSplit';
import {connect} from 'react-redux';
import { addPostsToBoardRequest } from "../../actions/board/addPostsToBoard";

class OwnPhotos extends Component {
    constructor(props) {
        super(props);
        this.props.init();
        this.props.requestImages(rest.imagesSelf);     
    }

    render() {
        console.warn(this.props.selectedPosts);
        this.data = rowSplit(this.props.images);
        return(
            <View style={{flex:1}}>
                <FHHeader title="عکس های اشتراکی شما"/>
                <View style={{flex:1}}>
                    <View> 
                        <FlatList 
                            data={this.data}
                            renderItem={({item}) => <Row leftImage={{id : item[0].id ,uri : item[0].uri}} rightImage={{id:item[1].id ,uri: item[1].uri}}/>}
                        />
                    </View>
                    <View style={styles.addButton}>
                        <FHButton onPress={() => this.props.addPostsToBoardRequest(this.props.selectedPosts, this.props.boardId)} title="اضافه کردن"/>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return ({
        images : state.profileApp.imagesRequestReducer.images,
        success : state.profileApp.imagesRequestReducer.success,
        loading : state.profileApp.imagesRequestReducer.loading,
        url : state.profileApp.imagesRequestReducer.url,
        selectedPosts : state.boardsApp.addPostsToBoardReducer.posts,
        boardId : state.singleBoardApp.singleBoardRequestReducer.id
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        requestImages : (url) => dispatch(requestImages(url)),
        init : () => dispatch(imageRequestInit()),
        addPostsToBoardRequest : (selectedPosts, boardId) => dispatch(addPostsToBoardRequest(selectedPosts, boardId))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnPhotos);