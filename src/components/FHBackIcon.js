import React, { PureComponent } from 'react';
import {Icon, Button} from 'native-base';

import {goBack} from '../../NavigationService';

const FHBackIcon = (props) => (
    <Button  transparent rounded primary style={{borderRadius:50}} onPress={() => goBack()}>
        <Icon name={props.customIcon || 'arrow-forward'} type={props.customIconType} style={{color:(props.color) ? props.color : 'white'}} />
    </Button>
)
export default FHBackIcon;