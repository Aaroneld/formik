export const ADD_FORM_DATA = "ADD_FORM_DATA";


export const addFormData = data => {

    return {
        type: ADD_FORM_DATA,
        payload: data
    }
};