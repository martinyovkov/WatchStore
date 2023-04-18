import * as request from "./requester";

const baseUrl = 'https://baas.kinvey.com/user/kid_r1DdLNdGh';

const appCredetentials = 'Basic a2lkX3IxRGRMTmRHaDpmOTE0ZGU0MWZjMWU0YWFiOGZjNzljMzM0MmU4NWUwZg==';

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

export const register = (username, password) =>{

    const data = {username, password, 'likedWacthes': []}

    const response = fetch(baseUrl, {
        method: 'POST',
        headers:{
             'content-type': 'application/json',
            'Authorization': appCredetentials
        },
        body: JSON.stringify(data)
       
    }).then(result => result.json())

    return  response;

    //return request.post(`${baseUrl}/register`, {email, password});
}
    
