import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

// It is made up of core React !!

// React Element made up of core React

const heading1 = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX - HTML-like or XML-like syntax

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// Creating H1 tag using jsx

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element made up of jsx..

const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// Part_04_Begins

// React Element

const heading = <h1 className="head">Namaste React using JSX</h1>;

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component :- It is just a javascript function

const HeadingComponent = () => {
  return <h1 className="heading"> Namaste React Functional Component </h1>
};

const HeadingComponent2 = () => (
  <h1 className="heading"> Namaste React Functional Component </h1>
);
// In Industry developer's write the React Functional Component like this !!

// Nested JSX

const HeadingComponent3 = () => (
  <div id="container">
    <h1 className="heading"> Namaste React Functional Component </h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// Injection of one code into the another one

// Component Compositions

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);



const Heading_Component = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component </h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Heading_Component />);

// Writing the Component Using the Normal function Without the Arrow One

const Footer = function (){
    return (
        <footer className="foot"> Created by Swastik Mishra </footer>
    );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Footer />);

// But arrow function is the newer function and industry wise standard..  

// JavaScript Expressions in JSX

const name = "Swastik Mishra" ;

const Jsxexpression = () => (
  <div id="container">
    <h2>{name}</h2>
    <h1 className="heading"></h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Jsxexpression />);

// Putting react element inside the react component !!

// ReactElement made up of JSX !!

const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const H_C = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<H_C />);

// Putting react element inside a react element is same as putting react element inside a react component !! 


