import React , {Component} from 'react';
import {FlatList, Image, View, ScrollView, Text} from 'react-native';
import styles from './styles';
import {navigate} from '../../NavigationService';
import {singleBoardRequest} from '../actions/board/boardRequest';
import {connect} from 'react-redux';
import {PacmanIndicator} from 'react-native-indicators';
import colors from '../config/colors';

class FHSingleBoard extends Component {
    constructor(props) {
        super(props);
        this.props.singleBoardRequest(this.props.id);
    }

    render() {
        let toShow;
        if(this.props.loading) {
            toShow = <PacmanIndicator size={70} color={colors.accentColor}/>
        } else if(this.props.success) {
            toShow = <FlatList 
                        data = {this.props.images}
                        renderItem = {({item}) => <Image source={{uri : item.photo_url}} style={styles.boardImage} />}    
                        initialScrollIndex = {this.props.count - 1}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                    />
        } else {
            <Text>error</Text>
        }
        return (
        <View>
            <View style={{flexDirection: 'row', justifyContent:'space-between', padding:10}}>
                <Text onPress={() => navigate("Board")} style={{fontWeight:'bold'}}>همه</Text>
                <View style={{flexDirection: 'row'}}> 
                    <Text style={{fontSize: 12}}>{this.props.count + "  عکس"}</Text>
                    <Text style={{fontWeight:'bold'}}>{this.props.name + "    "}</Text>
                </View>
            </View>
            <View>
                {toShow}
            </View>
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
        count : state.singleBoardApp.singleBoardRequestReducer.count
    })
}

const mapDispatchToProps = dispatch => {
    return({
        singleBoardRequest : (id) => dispatch(singleBoardRequest(id)) 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FHSingleBoard);