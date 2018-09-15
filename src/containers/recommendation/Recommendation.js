import React , {Component} from 'react';
import { requestRecommendations } from "../../actions/recommendation/recommendationRequest";
import {BallIndicator} from 'react-native-indicators';
import colors from '../../config/colors';
import { View, Text, FlatList } from 'react-native';
import FHHeader from '../../components/FHHeader';
import FHPeopleItem from '../../components/FHPeopleItem';
import {connect} from 'react-redux';

class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.props.requestRecommendations();
    }

    render() {
        console.warn(this.props.recommendations);
        let toShow;
        if(this.props.loading) {
            toShow = <BallIndicator size={70} color={colors.accentColor}/>
        } else if(this.props.success) {
            toShow = <View style={{flex : 1, backgroundColor:'white'}}>
                        <FlatList 
                            data={this.props.recommendations}
                            renderItem = {({item}) => <FHPeopleItem isPrivate={item.is_private}
                                username={item.username} name={item.fullname}
                                avatar={item.avatar_url} following={item.user_status}
                                numOfMutual={item.count_of_common_friends}/>}

                        />
                    </View>
        } else {
            toShow = <View><Text>error</Text></View>
        }
        return(
            <View style={{backgroundColor:'white',flex:1}}>
                <FHHeader title="پیشنهاد ها"/>
                {toShow}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return({
        loading : state.recommendationApp.recomRequestReducer.loading,
        success : state.recommendationApp.recomRequestReducer.success,
        recommendations : state.recommendationApp.recomRequestReducer.recommendations,
        error : state.recommendationApp.recomRequestReducer.error
    })
}

const mapDispatchToProps = dispatch => {
    return({
        requestRecommendations : () => dispatch(requestRecommendations())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation);