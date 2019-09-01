import { createStore } from 'redux';
import reducers from 'ducks/reducers';

const globalState = createStore(reducers);

export default globalState;