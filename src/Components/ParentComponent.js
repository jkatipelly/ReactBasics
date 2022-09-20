import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ParentName : 'Parent'
      }

      this.greetParent=this.greetParent.bind(this)
    }

    greetParent=(childName)=>{
        alert(`Hello ${this.state.ParentName} from ${childName}`)
        //console.log("Hello from Parent component") //Template Literal ``
    }

  render() {
    return (
        <div>
            {/* <button onClick={()=>{this.greetParent()}}>click here parent</button> */}
        <ChildComponent greeHandler={this.greetParent}></ChildComponent>
        </div>
    )
  }
}

export default ParentComponent