import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

import './assets/stylesheets/base.scss';
import './assets/stylesheets/antonio.scss';
import './assets/stylesheets/spike.scss';

const store = configureStore();

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
