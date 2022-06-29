import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { AuthProvider } from './components/authProvider';
import store from './components/store';

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

