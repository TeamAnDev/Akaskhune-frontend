import React from 'react';
import {Icon} from 'native-base';
import colors from '../../config/colors';
export const HomeIcon = ({tintColor}) => ( 
<Icon type="Feather" name="book"  style={{color:tintColor, fontSize: tintColor === colors.primaryColor ? 30 : 27,}} />
);
export const ProfileIcon = ({tintColor}) => ( 
    <Icon type="Feather" name="user"  style={{color:tintColor, fontSize: tintColor === colors.primaryColor ? 30 : 27,}} />
);
export const SearchIcon = ({tintColor}) => ( 
<Icon type="Feather" name="search"  style={{color:tintColor, fontSize: tintColor === colors.primaryColor ? 30 : 27,}} /> 
);
export const NotifiactionIcon = ({tintColor}) => ( 
    <Icon type="Feather" name="bell"  style={{color:tintColor, fontSize: tintColor === colors.primaryColor ? 30 : 27,}} />
);
