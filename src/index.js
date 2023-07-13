import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import FirebaseContext from "./context/firebase.js";
import {fireBase, FieldValue} from "./lib/firebase.js";

ReactDOM.render( 
<FirebaseContext.Provider value={{fireBase, FieldValue}}>
<App/>
</FirebaseContext.Provider>

,document.getElementById('root'))

