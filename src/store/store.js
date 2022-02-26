import { createStore, applyMiddleware} from "redux";
import rootReducer from './reducers';
import { ShelterMiddleware} from "./middleware/ShelterMiddleware";
import {SendMiddleware} from "./middleware/SendMiddleware";
	
export const store = createStore(
	rootReducer, applyMiddleware(ShelterMiddleware, SendMiddleware))
