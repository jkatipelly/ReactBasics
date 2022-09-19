import React, { Component } from 'react'

class Footer extends Component {

  render()  
  {
    const{name,heroName}=this.props;
    return <h1>Hello {name} a. k. a {heroName}</h1>  
  }
}

export default Footer