import React, { Component } from 'react'

export class LifecycleB extends Component {
constructor(props) {
  super(props)
console.log('LifecycleB Constructor')
  this.state = {
     first:50
  }
}

static getDerivedStateFromProps(state,props)
{
    console.log('LifecycleB getDerivedStateFromProps')
    return null;
}

componentDidMount()
{
    console.log('LifecycleB componentDidMount')
}

shouldComponentUpdate()
{
    console.log('LifcycleB shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate()
{
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate()
{
    console.log('LifecycleB componentDidUpdate')
}

  render() {

    console.log('LifecycleB render')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB