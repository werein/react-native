import { compose, createStore, combineReducers } from 'redux';
import * as reducers from './reducers/index';

const reducer = combineReducers({ ...reducers });

export const store = compose(
  // applyMiddleware(thunkMiddleware), sagaMiddleware, epicMiddleware or some another
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : f => f
)(createStore)(reducer);

store.dispatch({ type: '!!INIT' });
export default store;
