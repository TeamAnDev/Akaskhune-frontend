import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Row from './Row';
import FHHeader from '../../components/FHHeader';
import FHButton from '../../components/FHButton';
import styles from './styles';
// import {requestImages, imageRequestInit} from '../../actions/profile/profileRequest';
import {rest} from '../../config/urls';
import rowSplit from '../../components/Functions/rowSplit';
import {connect} from 'react-redux';
import { addPostsToBoardRequest } from "../../actions/board/addPostsToBoard";
import {ownPhotosRequest} from '../../actions/board/ownPhotos';
import {goBack} from '../../../NavigationService'

class OwnPhotos extends Component {
    constructor(props) {
        super(props);
        this.props.ownPhotosRequest(this.props.boardId);     
    }

    render() {
        this.data = rowSplit(this.props.images);
        console.warn("wtf", this.data);
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
                        <FHButton onPress={() => {this.props.addPostsToBoardRequest(this.props.selectedPosts, this.props.boardId); goBack();}} title="اضافه کردن"/>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return ({
        images : state.ownPhotosApp.ownPhotosRequestReducer.images,
        success : state.ownPhotosApp.ownPhotosRequestReducer.success,
        loading : state.ownPhotosApp.ownPhotosRequestReducer.loading,
        next : state.ownPhotosApp.ownPhotosRequestReducer.next,
        selectedPosts : state.boardsApp.addPostsToBoardReducer.posts,
        boardId : state.singleBoardApp.singleBoardRequestReducer.id
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        ownPhotosRequest : (id) => dispatch(ownPhotosRequest(id)),
        addPostsToBoardRequest : (selectedPosts, boardId) => dispatch(addPostsToBoardRequest(selectedPosts, boardId))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnPhotos);