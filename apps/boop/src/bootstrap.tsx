import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import "./index.scss";


const container = document.getElementById("app") as Element;
const root = ReactDOM.createRoot(container);
root.render(<App/>);

export default App
