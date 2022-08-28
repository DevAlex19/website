import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { AuthProvider } from './app/authProvider/authProvider';
import store from './app/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App/>
        </AuthProvider>
    </Provider>
  </React.StrictMode>
);

