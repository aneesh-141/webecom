import React, {Component} from 'react';

class Rangebtn extends Component{
    render(){
        return(

        <form style={{marginTop:"20px"}}>
        <div className="form-group">
            <input type="range" className="form-control-range" id="formControlRange"></input>
        </div>
        </form>
        );
    }
}

export default Rangebtn;