import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_GET = 'ERROR_GET';
export const FETCHING = 'FETCHING';
export const ERROR_POST = 'FETCHING';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING});
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('RES: ', res);
            dispatch({type: ADD_SMURF, payload: res.data});
        })
        .catch(err => {
            console.log('ERROR: ', err);
            dispatch({type: ERROR_GET});
        });
};