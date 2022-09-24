import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
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
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp