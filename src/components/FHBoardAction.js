import React from 'react';
import {Icon} from 'native-base';
import {View} from 'react-native';


const FHBoardAction = (props) => {
    if(props.board) {
        return (
            <View style={{flexDirection:'row'}}>
                <View>
                <Icon  onPress={props.onPressAdd} type='Feather' name="plus" style={{color:'white'}}/>
                    </View>
                <View style={{marginLeft:10}}>
                    <Icon onPress={props.onPressTrash} type='Octicons' name="trashcan" style={{color:'white'}}/>
                </View>
            </View>
        )
    }
    else {
        return <View></View>
    }
}

export default FHBoardAction;