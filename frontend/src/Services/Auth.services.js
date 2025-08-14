import axios from 'axios';

const Auth_Url = {
    AUTH_URL: `${import.meta.env.VITE_API_URL}/users`
}

const CreateAccount = async (payload) => {
    const response = await axios.post(`${Auth_Url.AUTH_URL}/register`, payload, {
      withCredentials: true, 
    })
    return response;
}

export const AuthServices = {
    CreateAccount,
}