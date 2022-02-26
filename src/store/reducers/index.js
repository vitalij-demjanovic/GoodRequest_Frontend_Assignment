import { combineReducers } from "redux";
import shelt from './SheltersReducer'
import form from './formReducer'

export default  combineReducers({shelt, form})
