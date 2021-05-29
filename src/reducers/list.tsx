import * as TYPES from '../actions/types';
const initialState = {
    list: []
}
export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case TYPES.GET_LIST:
            return { ...state };
        case TYPES.GET_LIST_SUCCESS: {
            return {
                ...state,
                list: action.data
            }
        }
        default:
            return state;
    }
};