import React from 'react';
import ReactDOM from 'react-dom';
import App from './Hooks/App';
import * as serviceWorker from './Service/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
