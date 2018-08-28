import React from 'react';
import {Component} from 'react';
import {ScrollView, View, Image, ListView} from 'react-native';
import styles from './styles';
import FHRow from '../../components/FHRow';

class Images extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource : ds.cloneWithRows([[require('../../../images/apple.jpg'),require('../../../images/photo1.jpg')],
                        [require('../../../images/balloons.jpg'),require('../../../images/photo2.jpg')],
                        [require('../../../images/buffon.jpg'), require('../../../images/photo3.jpg')]])
        }
    }

    render() {
        return (
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <FHRow leftImage={rowData[0]} rightImage={rowData[1]}/>}
            />
        );
    }
}

export default Images;