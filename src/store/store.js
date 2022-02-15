import { createStore, applyMiddleware} from "redux";
import rootReducer from './reducers';
import { ShelterMiddleware} from "./middleware/ShelterMiddleware";
	
export const store = createStore(
	rootReducer, applyMiddleware(ShelterMiddleware))
