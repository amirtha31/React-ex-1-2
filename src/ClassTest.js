import React, { Component } from 'react'
class Cars extends Component {
    state = { 
        count:0
     } 
     handleClick(){
        console.log(this.state.count)
        this.setState({count:this.state.count+1})
        
     }
     componentDidMount(){
        console.log(this.state.count,"mount")
        this.setState({count:this.state.count+1})

     }
    render() { 
        return (
            <>
            <p>Value : {this.state.count}</p>
            <ul>
                <li>Indica</li>
                <li>Linea</li>
            </ul>
            <button style={{border:"5px solid red"}} onClick={() => this.handleClick()}>+</button>
            <button style={{border:"5px solid red"}} onClick={() => this.setState({count:this.state.count-1})}>-</button>
            </>
        );
    }
}
 
export default Cars ;