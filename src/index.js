import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import './CSS/main.css';




const app = ReactDOMClient.createRoot(document.getElementById('App'))

app.render(<App/>)