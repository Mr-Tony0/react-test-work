import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addName} from './data/data';
import {edit} from './data/data';
import {del} from './data/data';

// Рэндер страницы
export const renderAll = (data) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App data = {data.allList} addName = {addName} edit = {edit} del={del}/>
      </React.StrictMode>
    );
  }
  