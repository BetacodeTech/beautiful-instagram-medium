import { combineReducers } from 'redux';
import { medium } from './medium.duck';
import { createStore} from 'redux';

const rootReducer = combineReducers({
  medium
});

const store = createStore(rootReducer);

export default store;



