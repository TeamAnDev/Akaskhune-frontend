import React , {Component} from 'react';
import {FlatList, Image, View, I18nManager, ScrollView, Text} from 'react-native';
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
                <View style={{flexDirection: 'row'}}> 
                    <Text style={{fontWeight:'bold'}}>{this.props.name + "    "}</Text>
                    <Text style={{fontSize: 12}}>35 عکس</Text>
                </View>
                <Text style={{fontWeight:'bold'}}>همه</Text>
            </View>
            <View>
                <FlatList 
                    data = {this.props.images}
                    renderItem = {({item}) => <Image source={{uri : item.uri}} style={styles.boardImage} />}    
                    renderScrollComponent={(props) =>
                        <ScrollView
                            {...props}
                            style={{
                                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}
                        />
                    }
                    horizontal = {true}
                />
            </View>
        </View>
        )
    }
}

export default FHSingleBoard;