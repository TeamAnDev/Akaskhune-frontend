import React , {Component} from 'react';
import {Container, Tab, Tabs} from 'native-base';
import colors from '../../config/colors';
import styles from '../profile/styles';
import FHPeopleItem from '../../components/FHPeopleItem';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import FHTagItem from '../../components/FHTagItem';

class TabBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.data = [{name : 'هشتگ', count_of_uses : 100},
                    {name : 'هشتگ', count_of_uses : 100},
                    {name : 'هشتگ', count_of_uses : 100},
                    {name : 'هشتگ', count_of_uses : 100},]
        return(
            <Container>
                <Tabs tabContainerStyle={{height:50} } 
                    tabBarUnderlineStyle={{
                    backgroundColor: colors.primaryColor,
                    height: 2}}>
                    <Tab heading="هشتگ" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        <FlatList
                            data = {this.data}
                            renderItem={({item}) => <FHTagItem count_of_uses={item.count_of_uses} name={item.name}/>}
                        />
                    </Tab>
                    <Tab heading="کاربران" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        <FlatList
                            data = {this.props.users}
                            renderItem={({item}) => <FHPeopleItem username={item.username} name={item.fullname} following={item.is_following} avatar={item.avatar}/>}
                        />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return({
        loading : state.searchUserApp.searchUserRequestReducer.loading,
        success : state.searchUserApp.searchUserRequestReducer.success,
        users : state.searchUserApp.searchUserRequestReducer.users,
        error : state.searchUserApp.searchUserRequestReducer.error,
        next : state.searchUserApp.searchUserRequestReducer.next,
    })
}

export default connect(mapStateToProps, null)(TabBox);