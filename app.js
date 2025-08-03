import React from "react";
import ReactDOM from "react-dom/client";

// React Element = It is a Object when we render on DOM it becomes html DOM element.

const heading = React.createElement("h1", {id:'heading'}, "Namaste React!!");
const jsxHeading = <h1 id="heading" className='heading'>Namaste React from JXS!!!</h1>

//So above code is very difficult to write, hence react developer written JSX.
// JSX - is  not HTML inside js. IT has HTML like syntax.
//Transpilation is done by parcel. parcel converts the code to ES6 before it reaches to the js.
// IT is not a parcel that actually doing transpilation.
// Babel is doing transpilation. convert JSX to JavaScript.

// In JSX we use camel case to write attribute.
// If you want to write jsx on multiple lines then you need to wrap it inside ().


// React components : 2 types
// Class Based Component  - old
// functional Component - New

// React functional component = It is just a normal javascript function that returns JXS(write function name with capital letters).
// React functional component is a function that returns react element.
// Component composition = You are composing two components one another.
//normal function use here
const Title = function(){
    return <h1 className="head">Namaste React</h1>
};
// Component composition
// arrow function use here
const offer = 'I get offer';
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <Title></Title>
        {Title()}
        {jsxHeading}
        <h1>Functional Component</h1> 
        <h2>{offer}</h2>
        <h3>{20+30}</h3>
    </div>
);

// if you write {} curly brackets inside functional component then you can write any javascript code inside it. 
// you can put react elements inside react functional component, element inside element, component inside component, component inside element.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //here react will replace from html DOM with current h1 tag.

// JXS prevent cross site scripting attacks. It sanitizes all html code.
// React code is readable because of JXS.
