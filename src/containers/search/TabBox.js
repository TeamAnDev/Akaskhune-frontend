import React , {Component} from 'react';
import {Container, Tab, Tabs} from 'native-base';
import {View, Text} from 'react-native';
import colors from '../../config/colors';
import styles from '../profile/styles';
import FHPeopleItem from '../../components/FHPeopleItem';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import FHTagItem from '../../components/FHTagItem';
import { SkypeIndicator } from 'react-native-indicators';

class TabBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let toReturnUser;
        if(this.props.loadingUser) {
            toReturnUser = <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><SkypeIndicator size={70} color={colors.accentColor}/></View>
        } else if(this.props.successUser) {
            toReturnUser = <FlatList
            data = {this.props.users}
            renderItem={({item}) => <FHPeopleItem isPrivate={item.isPrivate} username={item.username} name={item.fullname} following={item.is_following} avatar={item.avatar}/>}
        />
        } else {
            toReturnUser = <View></View>
        }
        let toReturnTag;
        if(this.props.loadingTag) {
            toReturnTag = <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><SkypeIndicator size={70} color={colors.accentColor}/></View>
        } else if(this.props.successTag) {
            toReturnTag = <FlatList
            data = {this.props.tags}
            renderItem={({item}) => <FHTagItem countOfUses={item.count_of_uses} name={item.name}/>}
        />
        } else {
            toReturnTag = <View></View>
        }
        return(
            <Container>
                <Tabs tabContainerStyle={{height:50} } 
                    tabBarUnderlineStyle={{
                    backgroundColor: colors.primaryColor,
                    height: 2}}>
                    <Tab heading="هشتگ" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        {toReturnTag}
                    </Tab>
                    <Tab heading="کاربران" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        {toReturnUser}
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return({
        loadingUser : state.searchUserApp.searchUserRequestReducer.loading,
        successUser : state.searchUserApp.searchUserRequestReducer.success,
        users : state.searchUserApp.searchUserRequestReducer.users,
        errorUser : state.searchUserApp.searchUserRequestReducer.error,
        nextUserUrl : state.searchUserApp.searchUserRequestReducer.next,
        loadingTag : state.searchUserApp.searchTagRequestReducer.loading,
        successTag : state.searchUserApp.searchTagRequestReducer.success,
        tags : state.searchUserApp.searchTagRequestReducer.tags,
        errorTag : state.searchUserApp.searchTagRequestReducer.error,
        nextTagUrl : state.searchUserApp.searchTagRequestReducer.next
    })
}

export default connect(mapStateToProps, null)(TabBox);