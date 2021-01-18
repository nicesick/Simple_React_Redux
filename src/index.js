import ReactDOM         from 'react-dom';
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import rootReducer      from './reducers/RootReducer'
import App              from './App';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/"         component={App} exact />
      <Route path="/:filter"  component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);