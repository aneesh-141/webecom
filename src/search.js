import React, {Component} from 'react';

class Search extends Component{
    render(){
        return(
            
             <form>

                    <div className="form-group">
                        <label for="exampleInputEmail1" style={{fontWeight:"600"}}>Search</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search"></input>
                        <small id="emailHelp" className="form-text text-muted">Click on the search button after typing</small>
                    </div>
                    <button type="submit" className="btn btn-danger">Search!</button>

             </form>
           
        );
    }
}

export default Search;