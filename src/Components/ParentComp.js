import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Jalander'
      }
    }

componentDidMount()
{
    setInterval(() => {
        this.setState({
            name : 'Jalander'
        })
    }, 2000);
}
    

  render() {

    console.log('*********Parent Component***********')
    return (
      <div>
        <h1>Parent Component</h1>
        <MemoComp> name=this.state.name</MemoComp>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp