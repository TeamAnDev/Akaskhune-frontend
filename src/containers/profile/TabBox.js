import React from 'react';
import {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import { Container, Header, Content, Tab, Tabs, Icon} from 'native-base';
import styles from './styles';
import Images from './Images';
import colors from '../../config/colors';
import {connect} from 'react-redux';
import Boards from './Boards';

export default class TabBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activeTab : 0
        }
    }
    componentDidMount()
    {
            setTimeout(()=>{
            this.setState({activeTab:1})
        
        },1000)
    }
    renderLock = () => <View style={{justifyContent : 'center' , alignItems : 'center', height: Dimensions.get('window').height * 1 /2 }}>
        <Icon type = "Feather" name = "lock" style={{fontSize : 50}} />
        <Text>این اکانت خصوصی میباشد.</Text>
    </View>
    render() {
        console.warn("status is " , this.props.is_private);
        return (
            <Container>
                <Tabs  page={this.state.activeTab} tabContainerStyle={{height:50} } 
                    tabBarUnderlineStyle={{
                    backgroundColor: colors.primaryColor,
                    height: 2}}
                    locked>
                    <Tab heading={"علاقمندیها   " + (this.props.boards_count ? this.props.boards_count : "")} tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        {!this.props.is_private || this.props.status === 'followed' ?  <Boards
                            username = {this.props.username}
                             loading = {this.props.boardsLoading}
                             success = {this.props.boardsSuccess}
                             error = {this.props.error}
                             boards = {this.props.boards}
                             next = {this.props.next}
                             allBoardsRequest = {this.props.allBoardsRequest}
                             initAllBoards = {this.props.initAllBoards}/> : this.renderLock() }
                    </Tab>
                    <Tab heading={"عکسها   " + (this.props.posts_count ? this.props.posts_count : "")} tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        {!this.props.is_private || this.props.status === 'followed' ? <Images 
                            username = {this.props.username}
                            images = {this.props.images}
                            success = {this.props.imagesSuccess}
                            loading = {this.props.imagesLoading}
                            url = {this.props.url}
                            requestImages = {this.props.requestImages}
                            init = {this.props.init}
                            /> : this.renderLock()}
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
