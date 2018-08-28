import uploadFileAxios from '../../axiosRequests/file/uploadFile';
export const FILE_UPLOAD_PREPARE = "FILE_UPLOAD_PREPARE";
export function fileUploadPrepare()
{
    return{
        type : FILE_UPLOAD_PREPARE,
    }
}
export const FILE_UPLOADING = "FILE_UPLOADING";
export const FILE_UPLOAD_ERR = "FILE_UPLOAD_ERR";
export const FILE_UPLOAD_SUCCES = "FILE_UPLOAD_SUCCES";
function filUploading(){
    return{
        type : FILE_UPLOADING,
    }
}
function fileUploadErr()
{
    return{
        type : FILE_UPLOAD_ERR,

    }
}
function fileUploadSuccess(url){
    return {
        type : FILE_UPLOAD_SUCCES,
        url
    }
}

export function uploadFile(filePath){
    return async (dispatch) => {
        dispatch(filUploading());
        await uploadFileAxios(filePath).then(function(response) {
            dispatch(fileUploadSuccess("response.data.url"));
        }).catch(function(error){
            dispatch(fileUploadErr());
        })
    }    
}
