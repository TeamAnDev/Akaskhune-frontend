import React from 'react';
import {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { Container, Header, Content, Tab, Tabs} from 'native-base';
import styles from './styles';
import Images from './Images';

class TabBox extends Component {

    render() {
        return (
            <Container>
                {/* <Header style={{backgroundColor:'red', }} hasTabs/> */}
                <Tabs tabContainerStyle={{height:50}}
                    tabBarUnderlineStyle={{
                    backgroundColor: '#393939',
                    height: 1}}>
                    <Tab heading="علاقمندیها" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                    </Tab>
                    <Tab heading="عکسها" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        <Images/>
                        {/* <Image source={{uri:'../../../images/apple.jpg'}} style={styles.image}/> */}
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default TabBox;