import {
    getSheltersRequest,
    getSheltersSuccess
} from "../actions";

const initialState = {
    list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case getSheltersRequest.toString(): {
            return {
                ...state,
                list: []
            }
        }
        case getSheltersSuccess.toString():
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}
