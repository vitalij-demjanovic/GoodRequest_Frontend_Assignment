import {getSheltersRequest, getSheltersSuccess} from "../actions";

export const ShelterMiddleware = (store) => (next) => async (action) => {
    if (action.type === getSheltersRequest.toString()) {
        fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                store.dispatch(getSheltersSuccess(data))
            })
            .catch(err => {
                throw new Error(err)
            })
    } else {
     next(action)
    }
}
