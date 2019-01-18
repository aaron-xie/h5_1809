import {createStore} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from '../reducer';

let store = createStore(reducer,composeWithDevTools());//{cart,goods}

export default store;