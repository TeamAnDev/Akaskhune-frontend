import React from 'react';
import {Icon} from 'native-base';
export const HomeIcon = ({tintColor}) => ( 
<Icon type="Feather" name="book" size={25} style={{color:tintColor}} />
);
export const ProfileIcon = ({tintColor}) => ( 
    <Icon type="Feather" name="user" size={25} style={{color:tintColor}} />
);
export const SearchIcon = ({tintColor}) => ( 
<Icon type="Feather" name="search" size={25} style={{color:tintColor}} /> 
);
export const NotifiactionIcon = ({tintColor}) => ( 
    <Icon type="Feather" name="bell" size={25} style={{color:tintColor}} />
);
