import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

// It is made up of core React !!

// React Element made up of core React

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React"
);

// JSX - HTML-like or XML-like syntax

// Creating H1 tag using jsx

// React Element made up of jsx..

const jsxHeading = <h1>Namaste React using JSX</h1>

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
