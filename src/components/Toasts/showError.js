import {Toast} from 'native-base'
function showError(message, buttonMessage, dur=30000,onCloseFunc)
{
    Toast.show({
        text: message,
        buttonText: buttonMessage,
        duration:dur,
        textStyle :{textAlign:'right'},
        type:"danger",
        position : 'top',
        textStyle :{textAlign:'right'},
        buttonTextStyle: { color: "#008000" },
        buttonStyle: { backgroundColor: "#5cb85c" },
        onClose:() => onCloseFunc!==undefined ? onCloseFunc() : null});
}
export default showError;