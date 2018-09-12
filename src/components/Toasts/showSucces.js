import {Toast} from 'native-base'
function showSuccess(message, buttonMessage, dur = 3000,onCloseFunc)
{
    Toast.show({
        text: message,
        buttonText: buttonMessage,
        duration:dur,
        textStyle :{textAlign:'right'},
        type:"success",
        position : 'top',
        buttonTextStyle: { color: "rgb(250,250,250)" },
        buttonStyle: { backgroundColor: "rgb(240, 0, 0)" },
        onClose:() => onCloseFunc!==undefined ? onCloseFunc() : null});
}
export default showSuccess;