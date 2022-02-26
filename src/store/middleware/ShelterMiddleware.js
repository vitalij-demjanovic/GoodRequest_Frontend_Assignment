import {getSheltersRequest, getSheltersSuccess} from "../actions";
import {serverShelter} from "../../api/api";


export const ShelterMiddleware = (store) => (next) => async (action) => {
    if (action.type === getSheltersRequest.toString()) {
        const { shelters } = await serverShelter()
        if (shelters) {
            store.dispatch(getSheltersSuccess(shelters))
        }
    } else {
     next(action)
    }
}
