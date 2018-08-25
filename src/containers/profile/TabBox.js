import React from 'react';
import {Component} from 'react';
import {Text, View} from 'react-native';
import { Container, Header, Content, Tab, Tabs} from 'native-base';
import styles from './styles';

class TabBox extends Component {

    render() {
        return (
            <Container>
                {/* <Header style={{backgroundColor:'red', }} hasTabs/> */}
                <Tabs tabContainerStyle={{height:50}}
                    tabBarUnderlineStyle={{
                    backgroundColor: '#393939',
                    height: 1}}>
                    <Tab heading="علاقه مندیها" tabStyle={styles.tab} textStyle={{color:'#393939'}} activeTabStyle={styles.tab} activeTextStyle={{color:'#393939'}}>

                    </Tab>
                    <Tab heading="عکسها" tabStyle={styles.tab} textStyle={{color:'#393939'}} activeTabStyle={styles.tab} activeTextStyle={{color:'#393939'}}>

                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default TabBox;