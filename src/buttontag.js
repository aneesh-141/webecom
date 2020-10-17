import React, {Component} from 'react';

class ButtonTag extends Component{
    render(){
        return(
        <button type="button" class="btn btn-primary btn-sm" style={{margin:"5px"}}>{this.props.btnname}</button>
        );
    }
}

export default ButtonTag;