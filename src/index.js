import ReactDOM         from 'react-dom';
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';

import rootReducer      from './reducers/RootReducer'
import App              from './App';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);