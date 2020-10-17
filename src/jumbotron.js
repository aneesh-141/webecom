import React, {Component} from 'react';
import './style.css'

class Jumbotron extends Component{
    render(){
        return(

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4" style={{color:"red", textAlign:"center", fontWeight:"400", fontSize:"100px"}} id="mov">WebECOM!</h1>
                <hr></hr>
                <p className="lead" style={{color:"black", textAlign:"center", fontWeight:"200"}}><strong>Everything you need in electronics!</strong></p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;