import {rest, axiosInstance} from '../../config/urls'
function uploadFileAxios(filePath){
    let formData = new FormData();
    formData.append('file', {
        uri: filePath,
        name: filePath,
        type: 'image/jpg'
      });
      const config = {
        method: 'POST',
        url:rest.file,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data;',
        },
        data: formData,
        
      };
      return axiosInstance(config);
}
export default uploadFileAxios;