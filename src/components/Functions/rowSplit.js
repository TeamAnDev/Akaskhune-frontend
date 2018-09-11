export default function rowSplit(images) {
    let data = [];
    for (let i = 0; i < images.length; i+=2) {
        let rightImage = "" ;
        if(images[i+1] !== undefined) {
            rightImage =  images[i+1].photo_url
        } ;
        let leftImage = '';
        if(images[i] !== undefined) {
            leftImage = images[i].photo_url
        } ;
        data[i/2] = [{uri:leftImage}, {uri: rightImage}];
    }
    return data;
}