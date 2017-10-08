import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const data = {t:"dasdfasdf"}

ReactDOM.render((
  <BrowserRouter>
    <App data={data}/>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
