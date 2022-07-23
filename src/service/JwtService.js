import axios from '../axios';

export const JwtService = {
    authenticate: function (username, password) {
        return axios.post('/api/authenticate', {
            "username" : username,
            "password" : password
        });
    }
};