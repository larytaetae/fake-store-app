import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext'; // ✅ IMPORTAR

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ ENVOLVER O APP */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
