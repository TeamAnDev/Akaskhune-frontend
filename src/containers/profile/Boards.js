import React , {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import FHSingleBoard from '../../components/FHSingleBoard';
import {allBoardsRequest, initAllBoards} from '../../actions/board/boardRequest'
import {connect} from 'react-redux';
import {Icon, Spinner} from 'native-base';
import colors from '../../config/colors';
import {PulseIndicator} from 'react-native-indicators'
import { rest } from '../../config/urls';

const NoBoardComponent = () => {
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Icon type="MaterialCommunityIcons" name="bookmark-off-outline"/>
            <Text>هیچ بردی وجود ندارد</Text>
        </View>
    )
}
class Boards extends Component {
    constructor(props) {
        super(props);
        this.props.initAllBoards();
        this.props.allBoardsRequest(rest.allBoards);
    }

    render() {
        let toReturn;
        if(this.props.loading) {
            toReturn = <View style={{flex:1, justifyContent:'center'}}><PulseIndicator count={8} size={70} color={colors.accentColor}/></View>
        } else if(this.props.success) {
            toReturn =  <View>
                            <FlatList 
                            data = {this.props.boards}
                            renderItem = {({item}) => <FHSingleBoard name={item.name} id={item.id}/>}
                            ListEmptyComponent = {<View style={{flex:1 ,justifyContent:'center', alignItems:'center', marginTop:100}}><NoBoardComponent/></View>}
                            /> 
                        </View>
        } else {
            toReturn = <View><Text>error</Text></View>
        }
        return (
            toReturn
        )
    }

}

const mapStateToProps = state => {
    return({
        loading : state.boardsApp.allBoardsRequestReducer.loading,
        success : state.boardsApp.allBoardsRequestReducer.success,
        error : state.boardsApp.allBoardsRequestReducer.error,
        count : state.boardsApp.allBoardsRequestReducer.count,
        boards : state.boardsApp.allBoardsRequestReducer.boards,
        next : state.boardsApp.allBoardsRequestReducer.next
    })
}

const mapDispatchToProps = dispatch => {
    return({
        allBoardsRequest : (url) => dispatch(allBoardsRequest(url)),
        initAllBoards : () => dispatch(initAllBoards()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);