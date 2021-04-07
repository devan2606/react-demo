import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/api/store'

// import store from './Thunk/store'
// import store from './redux/incrementDemo/store'

import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}> 
    <App />
    </Provider>,
  document.getElementById('root')
);
