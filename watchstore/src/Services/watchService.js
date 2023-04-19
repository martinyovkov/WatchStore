import * as request from "./requester";

const baseUrl = 'https://baas.kinvey.com/appdata/kid_r1DdLNdGh/Watches';

const viewerCredetntials = 'Basic Y2xpZW50OjEyMzQ1Ng==';

export const getAll = async () => {
   const response = fetch(baseUrl, {
        headers:{
             'content-type': 'application/json',
            'Authorization': viewerCredetntials
        }
       
    }).then(result => result.json())

    return await response;

};

export const getOne = (watchId) => request.get(`${baseUrl}/${watchId}`);

export const create = (watchData) => request.post(baseUrl, watchData);

export const edit = (watchId, watchData) => request.put(`${baseUrl}/${watchId}`, watchData);

export const remove = (watchId) => request.del(`${baseUrl}/${watchId}`);
