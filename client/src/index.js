import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// OLD
// ReactDOM.render(<App/>, document.getElementById("root"))

// Note: ReactDOM.render renders components directly to a given DOM element, the root element

//NEW - faster
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Note: ReactDOM.createRoot generates a new root container for rendering components

//In order to render components with better performance and better support for concurrent mode, React 17 introduced createRoot. 
//The fundamental operation of createRoot is similar to that of ReactDOM.render, 
//except that it creates a new root container and returns a reference to it rather than rendering to a particular DOM node. 
//Then, you can render your components to the root container using the returned reference

//With createRoot and the associated root.render function, you can run multiple calls to render using the same container DOM element, 
//unlike ReactDOM.render, in which every call to render requires a new call to the Document API.