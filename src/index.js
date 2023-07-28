import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import {
  store,
  persistor
} from 'reduxe/store';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


// "@auth0/auth0-react": "^2.2.0",
// "@chakra-ui/icons": "^2.1.0",
// "@chakra-ui/react": "^2.8.0",
// "@emotion/react": "^11.11.1",
// "@emotion/styled": "^11.11.0",
// "@reduxjs/toolkit": "^1.9.5",
// "axios": "^1.4.0",
// "formik": "^2.4.2",
// "framer-motion": "^10.13.0",
// "react": "^18.2.0",
// "react-dom": "^18.1.0",
// "react-loader-spinner": "^5.3.4",
// "react-redux": "^8.1.1",
// "react-router-dom": "^6.14.2",
// "react-scripts": "5.0.1",
// "react-toastify": "^9.1.3",
// "redux": "^4.2.1",
// "redux-persist": "^6.0.0",
// "web-vitals": "^2.1.3",
// "yup": "^1.2.0"
