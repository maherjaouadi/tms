import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Firebase from './components/Firebase/firebase';
import FirebaseContext from './components/Firebase/context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //<React.StrictMode>
  <FirebaseContext.Provider value={new Firebase()}>

  <App />
  </FirebaseContext.Provider>
  //</React.StrictMode>,
  ,document.getElementById('root'));

serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
