import {combineReducers} from 'redux';
import dogHandler from './dogHandler';

const reducers = combineReducers({
  dog: dogHandler,
});

export default reducers;
