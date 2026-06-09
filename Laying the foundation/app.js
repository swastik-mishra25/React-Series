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

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = <h1 className="head">Namaste React using JSX</h1>

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
