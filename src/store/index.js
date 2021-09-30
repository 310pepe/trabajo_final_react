//importaciones necesarias para crear un store
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

//importacion de middleware
import thunk from 'redux-thunk';

//importación de la combinación de reducers
import rootReducer from '../reducers';

//creación de variable con middleware a utilizar
const middleware = [thunk];

//creación del store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

//esportación del store
export default store;