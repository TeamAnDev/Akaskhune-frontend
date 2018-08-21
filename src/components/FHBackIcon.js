import React, { PureComponent } from 'react';
import {Icon, Button} from 'native-base';



const FHBackIcon = (props) => (
    <Button  transparent rounded primary style={{borderRadius:50}} onPress={() => props.navigation.goBack()}>
        <Icon name='arrow-forward' style={{color:'white'}} />
    </Button>
)
export default FHBackIcon;