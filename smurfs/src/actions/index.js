import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF'

export const getSmurfs = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('RES: ', res);
        })
        .catch(err => {
            console.log('ERROR: ', err);
        });
};