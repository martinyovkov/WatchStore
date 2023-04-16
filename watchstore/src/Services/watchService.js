import * as request from "./requester";

const baseUrl = 'https://baas.kinvey.com/appdata/kid_r1DdLNdGh/Watches';

const viewerAuthorization = 'Basic Y2xpZW50OjEyMzQ1Ng==';

export const getAll =  () => {
   const response = fetch(baseUrl, {
        headers:{
             'content-type': 'application/json',
            'Authorization': viewerAuthorization
        }
       
    }).then(result => result.json())

    return  response;

};

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const create = (gameData) => request.post(baseUrl, gameData);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData);
