import React, { PureComponent } from 'react';
import {Icon, Button} from 'native-base';

import {goBack} from '../../NavigationService';

const FHBackIcon = (props) => (
    <Button  transparent rounded primary style={{borderRadius:50}} onPress={() => goBack()}>
        <Icon name='arrow-forward' style={{color:'white'}} />
    </Button>
)
export default FHBackIcon;