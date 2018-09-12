import React , {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import FHRow from '../../components/FHRow';
import FHHeader from '../../components/FHHeader';
import rowSplit from '../../components/Functions/rowSplit';
import {requestTagPosts} from '../../actions/tagPosts/tagPostsRequest';
import {connect} from 'react-redux';

class TagPosts extends Component {
    constructor(props) {
        super(props);
        this.props.requestTagPosts(this.props.name);
    }

    render() {
        this.data = rowSplit(this.props.images);
        console.warn(this.data);
        return(
            <View style={{flex:1}}>
                <FHHeader title={this.props.name}/>
                <View style={{flex:1}}>
                    <FlatList
                        data = {this.data}
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