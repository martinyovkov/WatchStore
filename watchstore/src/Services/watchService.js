import * as request from "./requester";

const baseUrl = 'http://localhost:3001/watches';


export const getAll = async () => {
    const response = fetch(baseUrl).then(result => result.json());

    return await response;

};

export const getOne = (watchId) => request.get(`${baseUrl}/${watchId}`);

export const create = (watchData) => request.post(baseUrl, watchData);

export const edit = (watchId, watchData) => request.put(`${baseUrl}/${watchId}`, watchData);

export const remove = (watchId) => request.del(`${baseUrl}/${watchId}`);
