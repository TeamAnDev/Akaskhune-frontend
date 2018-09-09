import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Icon} from 'native-base';
import FHInput from '../../components/FHInput';
import colors from '../../config/colors';
import TabBox from './TabBox';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <View style={{flex:1}}>
            <Header style={{backgroundColor: colors.primaryColor}}
            androidStatusBarColor={colors.primaryColor}>
                <FHInput width='100%' text="جستجوی تگ یا کاربر" icon={<Icon type="Feather" name="search"/>}/>
                
            </Header>
            <TabBox/>
        </View>
        );
    }
}

export default Search;