import React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Spinner, Toast} from 'native-base';
import CameraOrPictureSelect from './CameraOrPictureSelect';
import FHHeader from '../../../components/FHHeader';
import EditProfileInputs from './EditProfileInputs';
import Footer from './Footer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {getSelfInfo} from '../../../actions/userInfo/userInfoRequest';
import colors from '../../../config/colors';

class EditProfile extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            error : false,
        }
    }
    componentDidMount()
    {
        this.props.getSelfInfo();
    }
    
    componentDidUpdate()
    {
        if(this.props.loadingGettingSelf && !this.state.loading)
        {
           this.setState({loading:true});
        }
        if(!this.props.loadingGettingSelf && this.state.loading)
        {
           this.setState({loading:false, error:false});
        }
    }
    render(){
        const CONTENT = !this.state.loading ? 
        (<View style={{flex:1}}>
            <View style={{flex:150, width:"100%"}}> 
                <CameraOrPictureSelect/>     
            </View>
            <View style={{flex:370, width:"100%"}}>    
                <EditProfileInputs/>  
            </View>
            <View style={{flex:65, width:"100%"}}>      
                <Footer/>
            </View>
        </View>) : (<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Spinner style={{alignSelf:'center'}} color={colors.accentColor}/>
        <Text>در حال بارگزاری اطلاعات</Text>
        </View>) ;
        return(
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1, backgroundColor:"white"}}>
                <FHHeader navigation={null} title="ویرایش پروفایل"/>
                <View style={{flex:1}}>
                   {CONTENT}
                </View>
               
            </View>
        </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = state => ({
   loadingGettingSelf : state.userInfoApp.getSelfInfoReducer.loading,
   errorGettingSelf : state.userInfoApp.getSelfInfoReducer.error,
   succesGettingSelf : state.userInfoApp.getSelfInfoReducer.succes,
});
const mapDispatchToProps = dispatch => ({
    getSelfInfo : () => dispatch(getSelfInfo()),
});

export default connect(mapStateToProps, 
                        mapDispatchToProps)(EditProfile)
