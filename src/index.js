import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './style.css';
import {} from './redux/contacts/contacts-types';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
