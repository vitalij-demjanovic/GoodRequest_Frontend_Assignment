import { combineReducers } from "redux";
import shelters from './SheltersReducer'
import form from './formReducer'

export default  combineReducers({shelters, form})
