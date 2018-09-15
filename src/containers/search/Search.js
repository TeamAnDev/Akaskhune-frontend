import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Icon} from 'native-base';
import FHInput from '../../components/FHInput';
import colors from '../../config/colors';
import TabBox from './TabBox';
import {changeKeyword} from '../../actions/search/searchAction';
import {connect} from 'react-redux';
import {requestSearchUser, requestSearchTag, initSearchTag, initSearchUser} from '../../actions/search/searchRequest';
import PopularTagsPattern from './PopularTagsPattern';
import FHBackIcon from '../../components/FHBackIcon';
class Search extends Component {
    constructor(props) {
        super(props);
        this.props.initSearchTag();
        this.props.initSearchUser();
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.keyword !== nextProps.keyword) {
            // if(nextProps.keyword !== '') {
                this.props.requestSearchUser(nextProps.keyword);
                this.props.requestSearchTag(nextProps.keyword);
            // }
        }
    }
    
    componentWillUpdate() {
    }

    onTextChange = (keyword) => {
        this.props.changeKeyword(keyword);
    }

    render() {
        console.warn(this.props.keyword);
        return(
        <View style={{flex:1, backgroundColor:'white'}}>
            {/* <PopularTagsPattern/> */}
            <Header style={{backgroundColor: colors.primaryColor}}
            androidStatusBarColor={colors.primaryColor}>
                <FHInput onTextChange={this.onTextChange} 
                        width='100%' text="جستجوی تگ یا کاربر" 
                        icon={<FHBackIcon color={colors.primaryColor}/>}
                        focus={true}/>
                
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
        requestSearchUser : keyword => dispatch(requestSearchUser(keyword)),
        requestSearchTag : keyword => dispatch(requestSearchTag(keyword)),
        initSearchTag : () => dispatch(initSearchTag()),
        initSearchUser : () => dispatch(initSearchUser())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);