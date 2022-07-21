// links to index.html to input React content into website

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router><App /></Router>, document.getElementById("root")); // connects App at id="root" of index.html