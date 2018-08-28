import React from 'react';
import {Component} from 'react';
import {View, Dimensions} from 'react-native';
import FHHeader from '../../../components/FHHeader';
import FHButton from '../../../components/FHButton';
import FHPasswordInput from '../../../components/FHPasswordInput';
import { Icon } from 'native-base';
import FHError from '../../../components/FHError';

class ChangePassword extends Component {

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <FHHeader navigation={this.props.navigation} title="تغییر رمز عبور"/>
                <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                    <View style={{flex:2}}>
                        <View style={{paddingTop:Dimensions.get("window").height * 70 / 570}}>
                        <Icon type='Feather' name="sheild"/>
                        </View>
                    </View>
                    <View style={{flex:5}}>
                        <FHPasswordInput text="رمز عبور قدیمی"/>
                        <FHPasswordInput text="رمز عبور جدید"/>
                        <FHPasswordInput text="تکرار رمز عبور جدید"/>

                    </View>
                    <View style={{flex:1}}>
                        <FHButton title="ثبت رمز عبور جدید"/>
                        <FHError errorText={this.props.error}/>
                    </View>
                </View>
            </View>
        )
    }

}

export default ChangePassword;