import {getSheltersRequest, getSheltersSuccess} from "../actions";

export const ShelterMiddleware = (store) => (next) => async (action) => {
    if (action.type === getSheltersRequest.toString()) {
        fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                store.dispatch(getSheltersSuccess(data.shelters))
            })
            .catch(err => {
                throw new Error(err)
            })
    } else {
     next(action)
    }
}
