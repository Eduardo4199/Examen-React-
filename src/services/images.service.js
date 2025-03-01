import { callApi } from './service';

export const imagesService = {
    getImages,
    getImageById
}

async function getImages(page){
    return callApi('https://picsum.photos/v2/list?page='+page,'GET')
    .then((data) =>{
        return data;
    }).catch((error) =>{
        return error
    })
}

async function getImageById(id){
    return callApi('https://picsum.photos/id/'+ id +'/info','GET')
    .then((data) =>{
        return data;
    }).catch((error) =>{
        return error
    })
}