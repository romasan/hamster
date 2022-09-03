import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import actions from './actions';
import { getRepos } from './gh_api';
const { setList } = actions;

getRepos('romasan').then(list => {
    list = list.filter(item => !['test', 'debug'].includes(item.name.split('-').shift()));
    store.dispatch(setList(list));
});

const container = document.getElementById('wrap');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

module.hot.accept();
