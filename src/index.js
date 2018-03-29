import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CourseDisplay from './proj2';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<CourseDisplay />, document.getElementById('root'));
registerServiceWorker();
