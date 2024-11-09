import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import "./globalCss.css"
import { Header } from './layouts/Header/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Header />
    <Router />
  </Fragment>
);