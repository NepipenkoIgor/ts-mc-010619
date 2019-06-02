import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { IStore, rootReducers } from './reducers';
import { rootEpics } from './epics';

declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

const rootEpicsMiddleware = createEpicMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'TypeScript MC'
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(rootEpicsMiddleware),
    // other store enhancers if any
);
export const store: Store<IStore> = createStore(rootReducers, enhancer);
rootEpicsMiddleware.run(rootEpics);
