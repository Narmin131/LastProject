import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/components/assets/sass/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux";
import store from './components/store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
