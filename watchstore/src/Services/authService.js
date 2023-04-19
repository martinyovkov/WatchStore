import * as request from "./requester";

const baseUrl = 'https://baas.kinvey.com/user/kid_r1DdLNdGh';

const appCredetentials = 'Basic a2lkX3IxRGRMTmRHaDpmOTE0ZGU0MWZjMWU0YWFiOGZjNzljMzM0MmU4NWUwZg==';

export const login = async (username, password) => {
    try {     
        const data = {username, password};

        const response = fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'Authorization': appCredetentials
            },
            body: JSON.stringify(data)
        
        }).then(result => result.json())

        const result = await response;

        if (result.error) {
            console.log('Yes');
            throw new Error('The username or password is not valid!');
        }

        return  result;
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = (username, password) =>{

    const data = {username, password, 'likedWacthes': []}
    try {
         const response = fetch(baseUrl, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'Authorization': appCredetentials
            },
            body: JSON.stringify(data)
        
        }).then(result => result.json())

        return  response;
    } catch (error) {
        console.log(error);
    }
   
}

export const addLikedWatch = (userId, newArr) =>{
  
         const data = {
            'likedWacthes': newArr
         }

        return request.put(`${baseUrl}/${userId}`, data);
   
}
    
