import React , {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import FHInput from '../../components/FHInput';
import PopularTagsPattern from './PopularTagsPattern';
import {Header, Icon} from 'native-base';
import colors from '../../config/colors';
import {navigate} from '../../../NavigationService';
import { requestPopularTags } from "../../actions/search/popularTagsRequest";
import {connect} from 'react-redux';
import {PulseIndicator} from 'react-native-indicators';

class PopularTags extends Component {
    constructor(props) {
        super(props);
        this.props.requestPopularTags();
    }

    render() {
        console.warn(this.props.tags);
        let toReturn;
        if(this.props.loading) {
            toReturn = <PulseIndicator count={8} size={70} color={colors.accentColor}/>
        } else if(this.props.success) {
            toReturn = <ScrollView><PopularTagsPattern tags={this.props.tags}/></ScrollView>
        } else {
            toReturn = <Text>error</Text>
        }
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <Header style={{backgroundColor: colors.primaryColor}}
                androidStatusBarColor={colors.primaryColor}>
                <FHInput onClick={() => navigate("Search")} onTextChange={this.onTextChange} width='100%' text="جستجوی تگ یا کاربر" icon={<Icon type="Feather" name="search"/>}/>
                </Header>
                <View style={{flex:1}}>
                    {toReturn}    
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return({
        loading : state.popularTagsApp.popularTagsRequestReducer.loading,
        success : state.popularTagsApp.popularTagsRequestReducer.success,
        error : state.popularTagsApp.popularTagsRequestReducer.error,
        tags : state.popularTagsApp.popularTagsRequestReducer.tags,
        next : state.popularTagsApp.popularTagsRequestReducer.next
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestPopularTags : () => dispatch(requestPopularTags())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularTags);