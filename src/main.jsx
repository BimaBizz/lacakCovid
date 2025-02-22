import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import CountryDetail from './route/CountryDetail';
import NotesCollection from './route/NotesCollection';
import { NotesProvider } from './lib/NotesContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/:countryName',
    element: <CountryDetail />
  },
  {
    path: '/collections',
    element: <NotesCollection />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesProvider>
      <main className='font-pop mx-auto p-2'>
        <RouterProvider router={router} />
      </main>
    </NotesProvider>
  </React.StrictMode>,
);
