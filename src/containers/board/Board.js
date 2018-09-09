import React , {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import FHRow from '../../components/FHRow';
import FHHeader from '../../components/FHHeader';
import Modal from 'react-native-modal';
import styles from './styles';
import { navigate } from '../../../NavigationService';
import {connect} from 'react-redux';
import {singleBoardRequest} from '../../actions/board/boardRequest';
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
        this.data = [];
        for (let i = 0; i < this.props.images.length; i+=2) {
            let rightImage = "" ;
            if(this.props.images[i+1] !== undefined) {
                rightImage =  this.props.images[i+1].photo_url
            } ;
            let leftImage = '';
            if(this.props.images[i] !== undefined) {
                leftImage =  this.props.images[i].photo_url
            } ;
            this.data[i/2] = [{uri:leftImage}, {uri: rightImage}];
        }
        console.warn(this.data);
        return (
            <View style={{flex:1}}>
                <FHHeader onPressTrash={() => this.setModalVisibility(true)}
                onPressAdd = {() => navigate("OwnPhotos")}
                title="عکس های من" board={true}/>
                <View style={{flex:1}}>
                    <FlatList 
                        data={this.data}
                        renderItem = {({item}) => <FHRow leftImage={{uri : item[0].uri}} rightImage={{uri : item[1].uri}}/>}
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
                                    <TouchableOpacity>
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
        id : state.singleBoardApp.singleBoardRequestReducer.id
    })
}

const mapDispatchToProps = dispatch => {
    return({
        singleBoardRequest : (id) => dispatch(singleBoardRequest(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);