import React , {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import FHRow from '../../components/FHRow';
import FHHeader from '../../components/FHHeader';
import Modal from 'react-native-modal';
import styles from './styles';
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {isModalVisible : false};
    }

    setModalVisibility = (isModalVisible) => {
        this.setState({isModalVisible : isModalVisible});
    }

    render() {
        this.data = [[{id:1, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:2, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:3, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:4, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:5, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:6, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:7, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:8, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:9, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:10, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}]];
                    
        return (
            <View>
                <FHHeader onPressTrash={() => this.setModalVisibility(true)} title="عکس های من" board={true}/>
                <FlatList 
                    data={this.data}
                    renderItem = {({item}) => <FHRow leftImage={item[0]} rightImage={item[1]}/>}
                />
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

export default Board;