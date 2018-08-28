import React, {Component} from 'react';
import {ListView, Text} from 'react-native';
import FHRow from './src/components/FHRow';


export default class Sample extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([["item1", "item2"],["item3", "item4"],["item5", "item6"]])  
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <FHRow leftText={rowData[0]} rightText={rowData[1]}/>}
            />    
        );
    }
}