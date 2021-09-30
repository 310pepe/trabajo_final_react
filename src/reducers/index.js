//importación del combinereducers
//recomendable tener todos los reducers en un solo archivo 
import { combineReducers } from "redux";
//importacion de los reducers
import gymReducer from "./gym";

//creación y exportación de la combinación de reducers
export default combineReducers({
    gymReducer,
});