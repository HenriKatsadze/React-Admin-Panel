import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";

const enhancer = applyMiddleware(thunk)
const store = createStore(rootReducer, composeWithDevTools(enhancer))
export default store