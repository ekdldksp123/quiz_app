import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; // redux-saga를 생성하기 위한 라이브러리
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../store/redux/index';
import rootSaga from '../store/saga/index'; 

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(
        applyMiddleware(...middlewares),
      );
    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;