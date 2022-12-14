import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    Increment()
    {
        this.setState(
            (previousState) => ({
            count :previousState.count + 1
         }), 
        ()=>{console.log('the callback value : '+ this.state.count)})      
       
    }

    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

  render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick = {()=>this.IncrementFive()}>Increment</button>
        </div>
      
    )
  }
}

export default Counter