import * as api from '../api';
import * as actions from './types.js';

const signin = (formData, navigate) => dispatch => {
    try {
        // login

        navigate('/');

    } catch (error) {
        console.log(error);
    }
}

const signup = (formData, navigate) => dispatch => {
    try {
        // signup

        navigate('/');

    } catch (error) {
        console.log(error);
    }
}