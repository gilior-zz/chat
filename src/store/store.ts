import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IAppState';
import { composeWithDevTools } from 'redux-devtools-extension';

// import  * as  Window from 'window'
// const window = new Window();
declare  var window

// const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
//     ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(reducer,composeWithDevTools(
    applyMiddleware()
   ));