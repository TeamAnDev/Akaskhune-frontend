import React , {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import FHRow from '../../components/FHRow';
import FHHeader from '../../components/FHHeader';
import Modal from 'react-native-modal';
import styles from './styles';
import { navigate, getParam, goBack } from '../../../NavigationService';
import {connect} from 'react-redux';
import {singleBoardRequest} from '../../actions/board/boardRequest';
import rowSplit from '../../components/Functions/rowSplit';
import { deleteBoardRequest } from "../../actions/board/deleteBoardRequest";
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {isModalVisible : false};
        this.props.singleBoardRequest(this.props.id);
    }

    setModalVisibility = (isModalVisible) => {
        this.setState({isModalVisible : isModalVisible});
    }

    render() {
        this.data = rowSplit(this.props.images[this.props.id]);
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <FHHeader onPressTrash={() => this.setModalVisibility(true)}
                onPressAdd = {() => navigate("OwnPhotos")}
                title={!this.props.navigation.getParam('username') ?  "عکس های من" : "عکس‌ها"} board={this.props.navigation.getParam('username') ? false : true}/>
                <View style={{flex:1}}>
                    <FlatList 
                        data={this.data}
                        renderItem = {({item}) => <FHRow leftImage={item[0]} rightImage={item[1]}/>}
                    />
                </View>
                <Modal isVisible={this.state.isModalVisible}
                onBackdropPress = {() => this.setModalVisibility(false)}>
                    <View style={styles.trashModal}>
                        <View style={styles.modalContainer}>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <Text style={styles.trashText}>از حذف این بورد مطمئن هستید؟</Text>
                            </View>
                            <View style={styles.trashAnswerBox}>
                                <View style={styles.singleAnswerBox}>
                                    <TouchableOpacity onPress={() => this.setModalVisibility(false)}>
                                        <View style={{justifyContent:'center'}}>
                                            <Text style={styles.trashText}>خیر</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.singleAnswerBox, styles.answerBoxBorder]}>
                                    <TouchableOpacity onPress={() => {
                                        this.props.deleteBoardRequest(this.props.id);
                                        this.setModalVisibility(false);
                                        goBack();
                                    }}>
                                        <Text style={styles.trashText}>بلی</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return({
        loading : state.singleBoardApp.singleBoardRequestReducer.loading,
        success : state.singleBoardApp.singleBoardRequestReducer.success,
        images : state.singleBoardApp.singleBoardRequestReducer.images,
        next : state.singleBoardApp.singleBoardRequestReducer.next,
        error : state.singleBoardApp.singleBoardRequestReducer.error,
        id : state.singleBoardApp.singleBoardRequestReducer.id,
        deleteSuccess : state.singleBoardApp.deleteBoardRequestReducer.deleteSuccess
    })
}

const mapDispatchToProps = dispatch => {
    return({
        singleBoardRequest : (id) => dispatch(singleBoardRequest(id)),
        deleteBoardRequest : (id) => dispatch(deleteBoardRequest(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);