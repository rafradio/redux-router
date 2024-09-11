import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import App from './App.jsx'
// import './index.css';
import {Provider} from "react-redux";
import {store} from './store/store';
import {router} from './route/routes.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
