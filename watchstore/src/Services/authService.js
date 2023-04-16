import * as request from "./requester";

const baseUrl = 'https://baas.kinvey.com/appdata/kid_r1DdLNdGh';

export const login = (email, password) => 
    request.post(`${baseUrl}/login`, { email, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, {email, password});
