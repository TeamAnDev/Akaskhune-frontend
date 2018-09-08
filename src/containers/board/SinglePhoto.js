import React, {Component} from 'react';
import {TouchableOpacity, ImageBackground, View} from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

class SinglePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {selected : false}
    }

    toggleSelect = () => {
        this.setState({selected : !this.state.selected});
    }

    render() {
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

export default SinglePhoto;