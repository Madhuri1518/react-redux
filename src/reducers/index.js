import CounterReducer from './counter';
import LoggedReducer from './isLogged';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : CounterReducer,
    isLogged: LoggedReducer
})

export default allReducers;