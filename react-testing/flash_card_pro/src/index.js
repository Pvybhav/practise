import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Stack from './components/Stack';
import { createStore } from 'redux';
import { setStack } from './actions/';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'title', cards: [] }));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
