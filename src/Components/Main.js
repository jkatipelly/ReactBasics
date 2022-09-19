import React  from "react";

const Main = (props) => {
    const{name,HeroName}    =props;
    return (
        <div>
            <h1>Hello {name} a.k.a {HeroName}</h1>
            {props.children}
        </div>
            )
        }

export default Main


