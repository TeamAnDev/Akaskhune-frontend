import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Icon} from 'native-base';
import colors from '../../config/colors';
import {DotIndicator} from 'react-native-indicators';
import {handleFollowReq} from '../../actions/notifications/handleFollowReq';
import {connect} from 'react-redux';
class AcceptOrRejectButton extends Component
{
    constructor(props)
    {
        super(props);
    }
    render() {
        return this.props.loading ? <DotIndicator size={6} color={colors.accentColor}/> : 
            <View style = {{flex:1, flexDirection : 'row'}}>
                <View style={{flex:1, borderRightWidth : 1, borderRightColor : colors.grey, alignItems:'center'}}>
                <TouchableOpacity 
                onPress={()=>this.props.handleFollowReq(this.props.username, "reject")}>
                    <Icon type="Feather" name="x"/>
                </TouchableOpacity>
                </View>

                <View style={{flex:1, alignItems:'center'}}>
                <TouchableOpacity
                 onPress={()=>this.props.handleFollowReq(this.props.username, "accept")}>
                    <Icon type="Feather" name="check"/>
                </TouchableOpacity>
                </View>
            </View>
    }
}
const mapStateToProps = state => {
    return({
      loading : state.notificationsApp.handleFollowReqReducer.loading 
    })
}

const mapDispatchToProps = dispatch => {
    return({
        handleFollowReq : (username, type) => dispatch(handleFollowReq(username, type)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptOrRejectButton);
