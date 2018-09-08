import React , {Component} from 'react';
import {FlatList, View} from 'react-native';
import FHSingleBoard from '../../components/FHSingleBoard';


class Boards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.data = [{count: 6, name:"عکس های من", images:[{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"}]},
        {count: 6, name:"عکس های من", images:[{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"}]},
        {count: 6, name:"عکس های من", images:[{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"}]},
        {count: 6, name:"عکس های من", images:[{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"}]},
        {count: 6, name:"عکس های من", images:[{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"},{uri : "https://cdn.pbrd.co/images/HB6nBtS.jpg"}]}];
        return (
            <View>
                <FlatList 
                    data = {this.data}
                    renderItem = {({item}) => <FHSingleBoard name={item.name} images={item.images} count={item.count}/>}
                /> 
            </View>
        )
    }

}

export default Boards;