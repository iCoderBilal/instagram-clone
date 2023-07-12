import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import FirebaseContext from "./context/firebase.js";

ReactDOM.render( 
<FirebaseContext.Provider value={{firebase, FieldValue}}>
<App/>
</FirebaseContext.Provider>

,document.getElementById('root'))

