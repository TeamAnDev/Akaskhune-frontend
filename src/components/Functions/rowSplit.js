export default function rowSplit(images) {
    let data = [];
    for (let i = 0; i < images.length; i+=2) {
        let rightImage = "" ;
        let rightId;
        if(images[i+1] !== undefined) {
            rightImage =  images[i+1].photo_url;
            rightId = images[i+1].id;
        } ;
        let leftImage = '';
        let leftId;
        if(images[i] !== undefined) {
            leftImage = images[i].photo_url;
            leftId = images[i].id;
        } ;
        data[i/2] = [{uri:leftImage, id:leftId}, {uri: rightImage, id:rightId}];
    }
    return data;
}