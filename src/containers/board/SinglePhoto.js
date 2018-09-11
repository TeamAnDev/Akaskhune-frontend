import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground, View} from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';
import { emptyOwnPosts, selectOwnPost, deselectOwnPost } from "../../actions/board/addPostsToBoard";
import {connect} from 'react-redux';

class SinglePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {selected : false}
        this.props.emptyOwnPosts();
    }

    toggleSelect = () => {
        this.setState({selected : !this.state.selected});
        if(!this.state.selected) {
            this.props.selectOwnPost(this.props.id);
        } else {
            this.props.deselectOwnPost(this.props.id);
        }
    }

    render() {
        console.warn(this.props.id);
        let checkMark = <View style={{alignSelf:"center"}}><Icon type="FontAwesome" name="check" style={{color:'#909090',fontSize:49, fontWeight:'bold'}}/></View>;
        return(
            <TouchableOpacity onPress={() => this.toggleSelect()}>
                <ImageBackground
                    source={{uri : this.props.uri}}
                    style={styles.image}
                    imageStyle={{borderRadius:10}}                    
                >
                    {(this.state.selected) ? checkMark : null}
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return({
        emptyOwnPosts : () => dispatch(emptyOwnPosts()),
        selectOwnPost : (id) => dispatch(selectOwnPost(id)),
        deselectOwnPost : (id) => dispatch(deselectOwnPost(id))
    })
}

export default connect(null, mapDispatchToProps)(SinglePhoto);