//How to create this type of structure of HTML in react
/**
 * Nested Structure
 * 
 *<div id="parent">
 *      <div id="child">
 *           <h1></h1>
 *      </div>
 *</div> 
 * 
 * React.createElement eod is creating an object....which is a HTML understood by the browser...
 *
 * Sibling Structure
 * 
 * <div id="parent">
 *      <div id="child">
 *           <h1>I'm h1 tag</h1>
 *           <h2>I'm h1 tag</h1>
 *      </div>
 *</div> 
 */

// Nested Structure Code

/*const parent = React.createElement( //parent is an object, react element
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I'm an h1 tag")
    )
);
console.log(parent); //Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

// Sibling Structure

// If you want to make the sibling structure from the nested structure....make the 3rd arguement in the array form...

const parent = React.createElement( //parent is an object, react element
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h1 tag")
        ])
); //Array of children
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// One parent multiple child
/*
*<div id = "parent">
        <div id = "child">
            <h1>I'm h1 tag </h1>
            <h2>I'm h1 tag </h2>
        </div>
<div id = "child2">
            <h1>I'm h1 tag </h1>
            <h2>I'm h1 tag </h2>
        </div>
    </div>

*/

const parentone = React.createElement("div", { id: "parent"}, [
    React.createElement("div", { id: "child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
    React.createElement("div", { id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
]);
console.log(parentone);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentone);
// Due to above complexity...











// Basic Program
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
// console.log(heading); // It will return an object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);