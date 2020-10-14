import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type rootStore= ReturnType<typeof rootReducer>

export default Store