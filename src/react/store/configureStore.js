import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';
import { routerReducer as routing} from 'react-router-redux'
// import logger from 'redux-logger';

const createStoreWithMiddleware = compose(
// applyMiddleware(thunk,promiseMiddleware(),logger()),
applyMiddleware(thunk, promiseMiddleware()))(createStore);

const rootReducer = combineReducers({
	...reducers,
	routing,
	});

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers');
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
