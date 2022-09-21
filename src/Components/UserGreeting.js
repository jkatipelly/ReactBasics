import React, { Component } from 'react'



class UserGreeting extends Component {

    constructor(props) {
      super(props)

      this.state = {
         isLoggedIn : false
      }
    }
  render() {

    return this.state.isLoggedIn && <div>Welcome Jalander</div>

    //   return this.state.isLoggedIn ? <div>Welcome Jalander</div> : <div>Welcome Guest</div>




    // let message

    // if(this.state.isLoggedIn)
    // {
    //     message=<div> Welcome Jalander</div>
    // }
    // else
    // {
    //     message = <div>Welcome Guest</div>
    // }

    // return message


    //If -  Else

    // if(this.state.isLoggedIn)
    // {
    //     return <div>Welcome Jalander</div>
    // }
    // else
    // {
    //     return <div>Welcome Guest</div>
    // }



    // return (
    //     <div>
    //         <div>Welcome Jalander</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting