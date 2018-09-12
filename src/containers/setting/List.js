import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import { Icon , Switch} from 'native-base';
import styles from './styles'
import {changePrivacy, getPrivacy, privacyInit} from '../../actions/settings/privacyActions';
import {connect} from 'react-redux';
class SettingList extends Component {
    constructor(props) {
        super(props);
        this.state = {privacy : false, loading : true};
        this.props.privacyInit()
        this.props.getPrivacy();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.getSuccess && nextProps.getSuccess !== this.props.getSuccess)
        {
            this.setState({privacy : nextProps.privacy, loading : false});

        }
    }
    togglePrivacy = () => {
       this.props.changePrivacy();
       this.setState({
           privacy : !this.state.privacy
       })
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
                     <Switch value={this.state.privacy} onValueChange={() => this.togglePrivacy()} disabled = {this.state.loading}/>
                 </TouchableOpacity>
             </View>
         )
    }
}  
const mapStateToProps = state => {
    return ({
        privacy : state.settingsApp.privacyReducer.privacy,
        getSuccess : state.settingsApp.privacyReducer.getSuccess,
})};
const mapDispatchToProps = dispatch => ({
    getPrivacy : () => dispatch(getPrivacy()),
    changePrivacy : () => dispatch(changePrivacy()),
    privacyInit : () => dispatch(privacyInit()),
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(SettingList)
