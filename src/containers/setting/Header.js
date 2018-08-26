import React from 'react';
import {Component} from 'react';
import { Container, Header, Body, Title, Right, Icon, Left } from 'native-base';
import colors from '../../config/colors';
import FHBackIcon from '../../components/FHBackIcon';

const SettingHeader = () => {
    return (
        // <Container>
        <Header style={{backgroundColor:'#5C5C5C'}}>
            <Left style={{flex:1}}>

            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Title>تنظیمات</Title>
            </Body>
            <Right style={{flex:1}}>
                <FHBackIcon/>
            </Right>
        </Header>
        // </Container>
    );
}

export default SettingHeader;