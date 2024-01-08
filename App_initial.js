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
// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child"}, [ 
//     React.createElement("h1", {}, "This is Namaste React !!"),
//     React.createElement("h2", {}, "I am an h2 tag !!")
//     ]),
//     React.createElement("div", {id: "child2"}, [ 
//     React.createElement("h1", {}, "I am an h1 tag !!"),
//     React.createElement("h2", {}, "I am an h2 tag !!")
//     ])
// ]
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(parent);
// root.render(parent);


//React Element => JS Object =>(when rendered)=> HTML Element

const heading = React.createElement("h1", {id: "heading"}, "Hello World")

const elem = <span>React Element</span>

// JSX => transpiled to React.createElement - JS Object => HTMLElement(render)
// const jsxHeading = (
//     <h1 className="heading" tabIndex="1">
//         {elem}
//     Hello from JSX !!
//     <HeadingComponent />
//     </h1>
//     )

// const Title = () => (
//     <h1 className="heading" tabIndex="1">
//     Title Component !!
//     </h1>
//     )

const Title = function() {
    return (
        <h1 className="heading" tabIndex="1">
        Title Component !!
        </h1>
    )
}

// React Functional Component

const HeadingComponent1 = () => <h1 className="heading">Namaste React Functional Component</h1>;

const number = 1000;
const data = 100

const HeadingComponent = () => (
    <div id="container">
        {/* <Title /> */}
        {/* <h2>{number}</h2> */}
        {data}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    )

const jsxHeading = (
    <h1 className="heading" tabIndex="1">
        {elem}
    Hello from JSX !!
    <HeadingComponent />
    </h1>
    )

// const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(jsxHeading)
console.log(HeadingComponent)
// root.render(<HeadingComponent />)
// root.render(<HeadingComponent />)
// root.render(jsxHeading)
