import React , {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import FHRow from '../../components/FHRow';
import FHHeader from '../../components/FHHeader';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.data = [[{id:1, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:2, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:3, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:4, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:5, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:6, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:7, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:8, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}],
                    [{id:9, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"},{id:10, uri : "https://cdn.pbrd.co/images/HB6of7L.jpg"}]];
        return (
        <View>
            <FHHeader title="عکس های من" board={true}/>
            <FlatList 
                data={this.data}
                renderItem = {({item}) => <FHRow leftImage={item[0]} rightImage={item[1]}/>}
            />
        </View>
        )
    }

}

export default Board;