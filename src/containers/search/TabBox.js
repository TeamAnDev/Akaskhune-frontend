import React , {Component} from 'react';
import {Container, Tab, Tabs} from 'native-base';
import colors from '../../config/colors';
import styles from '../profile/styles';
import FHPeopleItem from '../../components/FHPeopleItem';
import {FlatList} from 'react-native';

class TabBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.data = [{username:"HamedKh", name:"حامد خانکی", following:false, avatar:"https://cdn.pbrd.co/images/HB6o7oF.jpg"},
        {username:"HamedKh", name:"حامد خانکی", following:false, avatar:"https://cdn.pbrd.co/images/HB6o7oF.jpg"},
        {username:"HamedKh", name:"حامد خانکی", following:false, avatar:"https://cdn.pbrd.co/images/HB6o7oF.jpg"},
        {username:"HamedKh", name:"حامد خانکی", following:false, avatar:"https://cdn.pbrd.co/images/HB6o7oF.jpg"}];
        return(
            <Container>
                <Tabs tabContainerStyle={{height:50} } 
                    tabBarUnderlineStyle={{
                    backgroundColor: colors.primaryColor,
                    height: 2}}>
                    <Tab heading="هشتگ" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>

                    </Tab>
                    <Tab heading="کاربران" tabStyle={styles.tab} textStyle={styles.text} activeTabStyle={styles.tab} activeTextStyle={styles.text}>
                        {/* <FHPeopleItem username="HamedKh" name="حامد خانکی" following={false} avatar="https://cdn.pbrd.co/images/HB6o7oF.jpg"/> */}
                        <FlatList
                            data = {this.data}
                            renderItem={({item}) => <FHPeopleItem username={item.username} name={item.name} following={item.following} avatar={item.avatar}/>}
                        />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default TabBox;