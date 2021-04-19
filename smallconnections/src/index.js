import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
<React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>, 
document.getElementById('root')
);
