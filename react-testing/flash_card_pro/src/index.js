import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Stack from './components/Stack';

import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);
// store.subscribe(() => console.log('store', store.getState()));
// store.dispatch(setStack({id: 0, title: 'title', cards: []})); // dispatching action manually

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/stack' component={Stack}/>
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
