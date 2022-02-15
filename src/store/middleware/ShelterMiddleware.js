import {getSheltersRequest, getSheltersSuccess} from "../actions";
import axios from 'axios';


export const ShelterMiddleware = (store) => (next) => async (action) => {
    if (action.type === getSheltersRequest.toString()) {
        axios.get('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters')
  .then(function (response) {
    store.dispatch(getSheltersSuccess(response.data.shelters))
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
    } else {
     next(action)
    }
}


