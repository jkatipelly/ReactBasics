import React, {Component} from "react";

class Header extends Component{
    render()
    {
        
        return <h1>Welcome {this.props.name} a.k.a {this.props.HeroName} {this.props.children}</h1>
    }
}

export default Header   