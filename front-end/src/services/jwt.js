import * as decode from 'jwt-decode';


export default class jwt {


    loggedIn(){
        const token = this.getToken();
        console.log(token);
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            return true;
        }
        return false;
    }

    setToken(token) {
        // Saves user token to localStorage
        window.localStorage.setItem('token', token);
    }

    getToken() {
        // Retrieves the user token from localStorage
        return window.localStorage.getItem('token');
    }

    clearToken() {
        // Clear user token and profile data from localStorage
        window.localStorage.removeItem('token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }
}


const headers = {
    basic : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    // AuthBearer : `Bearer ${this.jwt.getToken()}`,
    auth : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.AuthBearer
    }
};