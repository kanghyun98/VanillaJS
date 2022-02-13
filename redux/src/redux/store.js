import createStore from '../core/Store.js';
import reducer from './reducer.js';

export const store = createStore(reducer);
