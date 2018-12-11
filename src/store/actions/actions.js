import * as type from './constants';

export const saveNotes = (arr) => {
    return{
        type: type.ACTION_SAVE_NOTICE,
        payload: arr
    };
};

export const addNotes  = (arr) =>{
    return {
        type: type.ACTION_ADD_NOTICE,
        payload: arr
    };
};

export const goToNote  = (index) =>{
    return {
        type: type.ACTION_GO_TO_NOTICE,
        payload: index
    };
};

export const removeNotes  = (arr) =>{
    return {
        type: type.ACTION_REMOVE_NOTE,
        payload: arr
    };
};