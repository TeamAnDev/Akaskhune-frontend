import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Row from './Row';
import FHHeader from '../../components/FHHeader';
import FHButton from '../../components/FHButton';
import styles from './styles';

class OwnPhotos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.data = [[{id:1, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"},{id:2, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"}],
                    [{id:3, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"},{id:4, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"}],
                    [{id:5, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"},{id:6, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"}],
                    [{id:7, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"},{id:8, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"}],
                    [{id:9, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"},{id:10, uri : "https://cdn.pbrd.co/images/HB6o0g2.jpg"}]];
        return(
            <View style={{flex:1}}>
                <FHHeader title="عکس های اشتراکی شما"/>
                <View style={{flex:1}}>
                    <View> 
                        <FlatList 
                            data={this.data}
                            renderItem={({item}) => <Row leftImage={item[0].uri} rightImage={item[1].uri}/>}
                        />
                    </View>
                    <View style={styles.addButton}>
                        <FHButton title="اضافه کردن"/>
                    </View>
                </View>
            </View>
        )
    }
}

export default OwnPhotos;