import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/UserList.css';
import './css/LoadingSpinner.css';
import './css/UserForm.css';
import App from './App';
import store from './utils/store';

import { Provider } from 'react-redux';
import { ProviderContext } from './utils/context';

//using redux
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('moz-root')
// );

//using both redux and context
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderContext>
        <App />
      </ProviderContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('moz-root')
);
