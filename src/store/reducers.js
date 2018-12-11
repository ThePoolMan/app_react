import * as type from './actions/constants';

const initialState = {
    notices: [],
    thisIndex: 0
};

export default function notes(state = initialState, action) {
    switch (action.type) {
        case type.ACTION_SAVE_NOTICE:
            return {...state, notices: action.payload};
        case type.ACTION_ADD_NOTICE:
            return {...state, notices: action.payload};
        case type.ACTION_REMOVE_NOTE:
            return {...state, notices: action.payload};
        case type.ACTION_GO_TO_NOTICE:
            return {...state, thisIndex: action.payload};
        default:
            return state;
    }
}