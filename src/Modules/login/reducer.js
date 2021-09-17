import { success, error, abort } from "redux-saga-requests";

export const TEST = 'TEST';

export const getTest = (payload) =>({
    type: TEST,
    payload
});

const initialState = {
    pending: false,
    error: false,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
    //TEST
    case TEST:{
        return{...state,pending:true};
        }
        case success(TEST):{
            return{
                ...state,
                ...action.payload,
                pending:false};
        }
        case error(TEST):{
            return{...state,
                error:true,
                pending:false,
                ...action.payload
            };
        }
        case abort(TEST):{
            return{...state,pending:false};
        }

    /**
     * DEFAULT_CASE
     */
    default:
        return state;
    }
};
export default homeReducer;