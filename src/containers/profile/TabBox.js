import React from 'react';
import {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { Container, Header, Content, Tab, Tabs} from 'native-base';
import styles from './styles';
import Images from './Images';
import colors from '../../config/colors';
import {connect} from 'react-redux';
import Boards from './Boards';

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
        //     setTimeout(()=>{
        //     this.setState({activeTab:1})
        
        // },1000)
    }
    render() {
        return (
            <Container>
                <Tabs  page={0} tabContainerStyle={{height:50} } 
                    tabBarUnderlineStyle={{
                    backgroundColor: colors.primaryColor,
                    height: 2}}
                    locked>
                    <Tab heading={"علاقمندیها   " + this.props.boards_count} tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        <Boards/>
                    </Tab>
                    <Tab heading={"عکسها   " + this.props.posts_count} tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        <Images username = {this.props.username}/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return({
        posts_count : state.profileApp.infoRequestReducer.posts_count,
        boards_count : state.profileApp.infoRequestReducer.boards_count
    })
}

export default connect(mapStateToProps, null)(TabBox);