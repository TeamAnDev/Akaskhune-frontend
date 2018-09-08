import React, { PureComponent } from 'react'
import {DotIndicator} from 'react-native-indicators';
import {View} from 'react-native';
import colors from '../../config/colors';

const FHDotIndicator = (props) => <View style={{margin : 5}}>
    <DotIndicator size={props.size} conunt={3} color={colors.accentColor} {...props}  />
</View>

export default FHDotIndicator;