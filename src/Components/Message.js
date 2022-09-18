import React,{Component} from "react";

class Message extends Component
{
    constructor()
    {
        super();

        this.state={
            message:"Hi User"
        }
    }

    subscribe()
    {
        this.setState({
            message:"Thank you for subscribing"}
        )
    }

    render()
    {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.subscribe()}>Subscribe</button>
        </div>
        )
            
        
    }
}
export default Message;