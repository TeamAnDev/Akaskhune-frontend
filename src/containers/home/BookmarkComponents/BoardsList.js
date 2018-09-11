import React from 'react';
import {ScrollView, FlatList, View, TouchableOpacity, Text} from 'react-native';
import {PacmanIndicator} from 'react-native-indicators';
import {CardItem, Icon} from 'native-base';
import colors from '../../../config/colors';
const BoardsList = ({boards, loading, url, boardsListRequest, addPostToBoard}) => {
    console.warn(boards);
    return (
    <ScrollView style={{flexGrow:1, borderRadius : 10}}>
    <FlatList
      style = {{backgroundColor: 'white'}}
      data = {boards}
  
      ListFooterComponent =
      {loading? <PacmanIndicator  color={colors.accentColor}/> : url !== null ? 
          <View style={{justifyContent:'center', alignItems:'center', width:'100%', borderRadius:8}}>
              <TouchableOpacity
              onPress = {() => {if(!loading){boardsListRequest(url)}}} >
                  <Icon type="EvilIcons" name="plus" style={{fontSize:50, padding:10}}/>
              </TouchableOpacity>
          </View>
          : null}
      
      renderItem = {({item}) =>
      <TouchableOpacity onPress = {() => {addPostToBoard(item.id)}}>
        <CardItem bordered style = {{borderBottomLeftRadius : 8}}>
          <Text style={{textAlign : 'right', fontWeight:'bold', width:'100%', borderRadius:8}}>
            {item.name} ({item.post_count} عکس) 
          </Text>
        </CardItem>
      </TouchableOpacity> }
      />
      </ScrollView>
  )}
  export default BoardsList;