import { ADD_FORM_DATA } from '../actions';

const initialState = {};

function reducer (state = initialState, action){

    switch(action.type){

        case ADD_FORM_DATA:
            return action.payload 
        default: 
            return state; 
    }
}

export default reducer; 