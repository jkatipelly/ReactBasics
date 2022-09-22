import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {

    constructor(props) {
      super(props)
   
      this.state = {
         name:'jalander'
      }

      console.log('LifecycleA constructor')
    }
static getDerivedStateFromProps(props,state)
{
    console.log('LifecycleA getDerivedStateFromProps')
    return null;
}

componentDidMount()
{
    console.log('LifecycleA ComponentDidMount')
}

shouldComponentUpdate()
{
    console.log('LifcycleA shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate()
{
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate()
{
    console.log('LifecycleA componentDidUpdate')
}

changeState = () =>{

    this.setState({

        name: 'Ashvath'
    })
}

  render() {
    console.log('LifecycleA render')
    return (
        <div>
             <div>LifecycleA</div>
             <button onClick={this.changeState}>Change State</button>
             <LifecycleB />
        </div>
    
    )
  }
}

export default LifecycleA