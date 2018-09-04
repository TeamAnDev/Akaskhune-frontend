import React from 'react';
import {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { Container, Header, Content, Tab, Tabs} from 'native-base';
import styles from './styles';
import Images from './Images';
import colors from '../../config/colors';

class TabBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activeTab : 0
        }
    }
    componentDidMount()
    {
        //Added for android bug
        setTimeout(()=>{
            // console.warn("here");
            this.setState({activeTab:1})
        
        },1000)
    }
    render() {
        // console.warn(this.state.activeTab)
        return (
            <Container>
                {/* <Header style={{backgroundColor:'red', }} hasTabs/> */}
                <Tabs  page={1} tabContainerStyle={{height:50} } 
                //  refs={component => this._tabs = component}
                    tabBarUnderlineStyle={{
                    backgroundColor: colors.primaryColor,
                    height: 2}}>
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