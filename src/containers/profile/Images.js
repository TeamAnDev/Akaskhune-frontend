import React from 'react';
import {Component} from 'react';
import {ScrollView, View, Image, ListView, Text} from 'react-native';
import styles from './styles';
import FHRow from '../../components/FHRow';
import {requestImages} from '../../actions/profile/profileRequest'
import {connect} from 'react-redux';
import {Spinner, Icon} from 'native-base';
import colors from '../../config/colors';


class Images extends Component {

    constructor(props) {
        super(props);
        this.dataSource = undefined;
        this.props.requestImages();     
    }

    render() {
        
        if(this.props.success) {
            const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
            let data = [];
            if(this.props.images.length === 0)
            {
                return (
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon type="Feather" name="close"/>
                        <Text>هیچ پستی وجود ندارد</Text>
                    </View>
                )
            }
            else {
                for (let i = 0; i < this.props.images.length; i+=2) {
                    let rightImage = "" ;
                    if(this.props.images[i+1] !== undefined) {
                        rightImage =  this.props.images[i+1]
                    } ;
                    data[i/2] = [{uri:this.props.images[i]}, {uri: rightImage}];
                }
                this.dataSource = ds.cloneWithRows(data);
                return ( 
                    <ListView 
                        dataSource={this.dataSource}
                        renderRow={(rowData) => <FHRow leftImage={rowData[0]} rightImage={rowData[1]}/>}
                        onEndReachedThreshold={10}
                        onEndReached={() => console.warn("end")}
                    />
                );
            }
        } 
        else if(this.props.loading) {
            return (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Spinner style={{alignSelf:'center'}} color={colors.accentColor}/>
                    <Text>در حال بارگزاری اطلاعات</Text>
                </View>
            )
        }
        else {
            return (
                <View><Text>error</Text></View>
            )
        }
    }
}

const mapStateToProps = state => {
    return ({
        images : state.profileApp.imagesRequestReducer.images,
        success : state.profileApp.imagesRequestReducer.success,
        loading : state.profileApp.imagesRequestReducer.loading
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        requestImages : () => dispatch(requestImages())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);