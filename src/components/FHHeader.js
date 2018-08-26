import React from 'react';
import FHBackIcon from './FHBackIcon';
import {Header, Right, Body, Left, Title} from 'native-base';

const FHHeader = (props) => {
    return (
        <Header style={{backgroundColor:'#5C5C5C'}}>
            <Left style={{flex:1}}>

            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Title>{props.title}</Title>
            </Body>
            <Right style={{flex:1}}>
                <FHBackIcon navigation={props.navigation}/>
            </Right>
        </Header>
    );
}

export default FHHeader;