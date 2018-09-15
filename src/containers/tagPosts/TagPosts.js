import React , {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity, Dimensions} from 'react-native';
import FHRow from '../../components/FHRow';
import FHHeader from '../../components/FHHeader';
import rowSplit from '../../components/Functions/rowSplit';
import {requestTagPosts} from '../../actions/tagPosts/tagPostsRequest';
import {connect} from 'react-redux';
import { Icon } from 'native-base';


const heightOfEmptyComponent = Dimensions.get("window").height * 3/4;
const emptyTagPosts = () => (
    <View style = {{height : heightOfEmptyComponent, justifyContent : 'center', alignItems : 'center'}}>
        <Icon type="Feather" name = "hash" style = {{fontSize: 50,}}/>
        <Text>در این هشتگ برای شما عکسی وجود ندارد</Text>
    </View>
);
class TagPosts extends Component {
    constructor(props) {
        super(props);
        this.props.requestTagPosts(this.props.name);
    }

    render() {
        this.data = rowSplit(this.props.images);
        console.warn("data", this.data);
        return(
            <View style={{flex:1, backgroundColor : 'white'}}>
                <FHHeader title={this.props.name}/>
                <View style={{flex:1}}>
                    <FlatList
                        data = {this.data}
                        refreshing = {this.props.loading}
                        ListEmptyComponent = {this.props.loading ? null : emptyTagPosts}
                        renderItem = {({item}) => <FHRow leftImage={item[0]} rightImage={item[1]}/>}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return({
        loading : state.tagPostsApp.tagPostsRequestReducer.loading,
        success : state.tagPostsApp.tagPostsRequestReducer.success,
        images : state.tagPostsApp.tagPostsRequestReducer.images,
        error : state.tagPostsApp.tagPostsRequestReducer.error,
        next : state.tagPostsApp.tagPostsRequestReducer.next,
        name : state.tagPostsApp.tagPostsRequestReducer.name
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestTagPosts : tag => dispatch(requestTagPosts(tag))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TagPosts);