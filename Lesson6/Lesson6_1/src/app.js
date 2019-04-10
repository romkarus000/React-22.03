import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import App from './app/components/App';



ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('app'));