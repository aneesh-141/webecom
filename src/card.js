import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Card extends Component{
    render(){
        return(

            <div className="col-md-3">
                <div className="card" style={{marginTop:"12px"}}>
                <img className="card-img-top" src={this.props.pic} alt="Card image cap"></img>
                <div className="card-body">
        <h5 className="card-title">{this.props.name}</h5>
        <p className ="card-text"><i class="fas fa-rupee-sign"></i>{this.props.price}</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Card;