import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware(); //Cria um middleware do saga
const store = createStore(reducers, applyMiddleware(sagaMiddleware)); //Aplica o middleware criado
sagaMiddleware.run(rootSaga); //Roda uma saga, caso queira rodar mais de uma, é necessário criar uma root-saga

export default store;
