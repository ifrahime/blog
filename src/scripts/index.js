import React from 'react'
import ReactDOM from 'react-dom'
//import 'src/lib/js/bootstrap/dist/css/bootstrap.css';

import App from './components/App'
import '../styles/app.scss'

var json = require("json-loader!./../resume.json");


ReactDOM.render(
  <App jsonObj={json}/>,
  document.getElementById('app')
);
