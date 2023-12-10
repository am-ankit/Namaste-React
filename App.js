/*
<div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>

*/

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading",xyz: "abc"},"Hello World from React !!")
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [ 
    React.createElement("h1", {}, "This is Namaste React !!"),
    React.createElement("h2", {}, "I am an h2 tag !!")
    ]),
    React.createElement("div", {id: "child2"}, [ 
    React.createElement("h1", {}, "I am an h1 tag !!"),
    React.createElement("h2", {}, "I am an h2 tag !!")
    ])
]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(parent);
console.log(root);
root.render(parent);
