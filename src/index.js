import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './LSinnovations/Main/main';
const application = (
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
);

ReactDOM.render(application, document.getElementById('root'));


