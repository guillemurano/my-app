import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import Characters from './components/Characters'

ReactDOM.render(<Provider store={store}>
<Characters /></Provider>, document.getElementById('root'));
