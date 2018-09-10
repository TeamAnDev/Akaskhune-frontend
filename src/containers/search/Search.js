import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Icon} from 'native-base';
import FHInput from '../../components/FHInput';
import colors from '../../config/colors';
import TabBox from './TabBox';
import {changeKeyword} from '../../actions/search/searchAction';
import {connect} from 'react-redux';
import {requestSearchUser} from '../../actions/search/searchRequest';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.keyword !== nextProps.keyword) {
            // if(nextProps.keyword !== '') {
                this.props.requestSearchUser(nextProps.keyword);
            // }
        }
    }

    onTextChange = (keyword) => {
        this.props.changeKeyword(keyword);
    }
    render() {
        console.warn(this.props.keyword);
        return(
        <View style={{flex:1}}>
            <Header style={{backgroundColor: colors.primaryColor}}
            androidStatusBarColor={colors.primaryColor}>
                <FHInput onTextChange={this.onTextChange} width='100%' text="جستجوی تگ یا کاربر" icon={<Icon type="Feather" name="search"/>}/>
                
            </Header>
            <TabBox/>
        </View>
        );
    }
}

const mapStateToProps = state => {
    return({
        keyword : state.searchUserApp.changeKeywordReducer.keyword
    })
}

const mapDispatchToProps = dispatch => {
    return({
        changeKeyword : keyword => dispatch(changeKeyword(keyword)),
        requestSearchUser : (keyword) => dispatch(requestSearchUser(keyword))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);