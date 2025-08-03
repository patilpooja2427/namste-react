import React from "react";
import ReactDOM from "react-dom/client";

// React Element = It is a Object when we render on DOM it becomes html DOM element.

const heading = React.createElement("h1", {id:'heading'}, "Namaste React!!");
const jsxHeading = <h1 id="heading">Namaste React from JXS!!!</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); //here react will replace from html DOM with current h1 tag.

//So above code is very difficult to write, hence react developer written JSX.
// JSX - is  not HTML inside js. IT has HTML like syntax.
//Transpilation is done by parcel. parcel converts the code to ES6 before it reaches to the js.