import React from 'react';
import { View, Text , TouchableHighlight} from 'react-native';
import {Button, Icon, Header, Body, Right, Left} from 'native-base';
import colors from '../../config/colors'
import styles from './styles'
import {navigate} from '../../../NavigationService';
import {connect} from 'react-redux';
import FHBackIcon from '../../components/FHBackIcon';

const ProfileHeader = (props) => {
    
    return (
        <Header style={{ backgroundColor: colors.primaryColor}}
            androidStatusBarColor={colors.primaryColor}>
            <Left style={{flex:1}}>
            {props.isSelf ? 
            <Button transparent rounded primary onPress={()=>navigate('EditProfile')}>
                <Text style={styles.editButton}>ویرایش</Text>
            </Button> : null }
                
            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Text style={styles.username}>{props.user_name}</Text>
            </Body>
            <Right style={{flex:1}}>
                {props.isSelf ? 
                <Button transparent rounded primary style={{borderRadius:50}}   onPress={() => navigate('Setting')}>
                    <Icon style={{color:'white'}} name='cog'/>
                </Button> : <FHBackIcon/>}
            </Right>
        </Header>    
    )
} 

const mapStateToProps = state => {
    return({
        username : state.profileApp.infoRequestReducer.username
    })
}

export default connect(mapStateToProps, null)(ProfileHeader);