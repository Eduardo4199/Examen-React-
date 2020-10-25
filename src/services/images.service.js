import { callApi } from './service';

export const imagesService = {
    getImages
}

async function getImages(){
    return callApi('https://picsum.photos/v2/list','GET')
    .then((data) =>{
        return data;
    }).catch((error) =>{
        return error
    })
}