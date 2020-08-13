import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from './App';



const root = document.getElementById("container");
root ? ReactDOM.render(<App />, root) : false;
