import { ADD_SMURF, ERROR_GET, FETCHING, ERROR_POST } from '../actions';

const initialState = {
    smurfList: [],
    errorGet: false,
    errorPost: false,
    isFetching: false
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SMURF:
            return{
                ...state,
                smurfList: action.payload,
                error: false,
                isFetching: false,
                errorPost: false
            }
        case ERROR_GET:
            return{
                ...state,
                errorGet: true
            }
        case ERROR_POST:
            return{
                ...state,
                errorPost: true
            }
        case FETCHING:
            return{
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
};