import React from 'react';
import FHBackIcon from './FHBackIcon';
import {Header, Right, Body, Left, Title} from 'native-base';
import colors from '../config/colors';
import FHBoardAction from './FHBoardAction';

const FHHeader = (props) => {
    return (
        <Header style={{ backgroundColor: colors.primaryColor}}
        androidStatusBarColor={colors.primaryColor}>
            <Left style={{flex:1}}>
                <FHBoardAction onPressTrash={props.onPressTrash} onPressAdd={props.onPressAdd} board={props.board}/>
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Title>{props.title}</Title>
            </Body>
            <Right style={{flex:1}}>
                <FHBackIcon customIcon={props.customIcon} customIconType={props.customIconType}/>
            </Right>
        </Header>
    );
}

export default FHHeader;