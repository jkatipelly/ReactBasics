import React  from "react";

const Main = (props) => {
console.log(props) 
    return (
        <div>
    <h1>Hello {props.name} a.k.a {props.HeroName}</h1>
    {props.children}
    </div>
    )}

export default Main


