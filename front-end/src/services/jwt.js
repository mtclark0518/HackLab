import * as decode from 'jwt-decode';


class jwt {

    static loggedIn(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    static isTokenExpired(token) {
        const decoded = decode(token);
        let isExpired = decoded.exp < (Date.now() / 1000) ?  true : false;
        return isExpired;
    }

    static setToken(token) {
        // Saves user token to localStorage
        window.localStorage.setItem('token', token);
    }

    static getToken() {
        // Retrieves the user token from localStorage
        return window.localStorage.getItem('token');
    }

    static clearToken() {
        // Clear user token and profile data from localStorage
        window.localStorage.removeItem('token');
    }

    static getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }
}
export default jwt;

// const headers = {
//     basic : {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     AuthBearer : `Bearer ${getToken()}`,
//     auth : {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': this.AuthBearer
//     }
// };