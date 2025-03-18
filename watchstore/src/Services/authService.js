import * as request from "./requester";

const baseUrl = 'http://localhost:3001';

export const login = async (email, password) => {
    try {     
        const data = {email, password};

        const response = fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        
        }).then(result => result.json())

        const result = await response;
        console.log(result.status);
        if (result.status === 400) {
            throw new Error('The email or password is not valid!');
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

export const register = (email, username, password, rePassword) =>{

    try {
        const data = {email, username, password, rePassword }
    
        const response = fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
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
    
