import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import FHButton from '../../../components/FHButton';
class Footer extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return (
            <View style={{flex:1}}>
                <FHButton title="دخیره‌ تغییرات" 
                onPress={ () => {}} 
                        disabled={false}
                        loading={true}/>
            </View>
        );
    }
}

export default Footer;