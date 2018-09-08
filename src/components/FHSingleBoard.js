import React , {Component} from 'react';
import {FlatList, Image, View, ScrollView, Text} from 'react-native';
import styles from './styles';

class FHSingleBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // this.data = [{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"}];
        return (
        <View>
            <View style={{flexDirection: 'row', justifyContent:'space-between', padding:10}}>
                <Text style={{fontWeight:'bold'}}>همه</Text>
                <View style={{flexDirection: 'row'}}> 
                    <Text style={{fontSize: 12}}>{this.props.count + "  عکس"}</Text>
                    <Text style={{fontWeight:'bold'}}>{this.props.name + "    "}</Text>
                </View>
            </View>
            <View>
                <FlatList 
                    data = {this.props.images}
                    renderItem = {({item}) => <Image source={{uri : item.uri}} style={styles.boardImage} />}    
                    initialScrollIndex = {this.props.count - 1}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                />
            </View>
        </View>
        )
    }
}

export default FHSingleBoard;