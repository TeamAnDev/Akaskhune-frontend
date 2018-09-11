import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import { Icon , Switch} from 'native-base';
import styles from './styles'

class SettingList extends Component {
    constructor(props) {
        super(props);
        this.state = {isPrivate : false};
    }

    togglePrivacy = () => {
        this.setState({isPrivate : !this.state.isPrivate});
    }

    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
                 <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigation.navigate('ChangePassword')}>
                     <Text>تغییر رمز عبور</Text>
                     <Icon name="arrow-back"/>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.listItem} onPress={() => this.togglePrivacy()}>
                     <Text>حساب شخصی</Text>
                     <Switch value={this.state.isPrivate} onValueChange={() => this.togglePrivacy()}/>
                 </TouchableOpacity>
             </View>
         )
    }
}  

export default SettingList;