import {rest, axiosInstance} from '../../config/urls'
function newPostAxios(filePath, caption, tags){
    let formData = new FormData();
    formData.append('file', {
        uri: filePath,
        name: filePath,
        type: 'image/jpg'
      });
    for (var i = 0; i < tags.length; i++) {
        formData.append('tags[]', tags[i]);
    }
    formData.append('caption', caption);
      const config = {
        method: 'POST',
        url:rest.newPost,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data;',
        },
        data: formData,
        
      };
      return axiosInstance(config);
}
export default newPostAxios;