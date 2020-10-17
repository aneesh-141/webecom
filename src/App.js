import React, {Component} from 'react';
import ButtonTag from './buttontag';
import Card from './card';
import FooterPage from './footer';
import Jumbotron from './jumbotron';
import Navbar from './navbar';
import Rangebtn from './rangebtn';
import Search from './search';


class App extends Component{
    render(){
        return(

            <div>
                <Navbar/>
                <Jumbotron/>
                <div className="container">
                    <div className="row" style={{marginBottom: "25px"}}>
                        <div className="col-md-3" style={{ borderRight: "0.2px solid grey"}}>
                          <Search/>  
                          <div>
                              <h3 style={{marginTop:"30px"}}>Select Tags:</h3>
                              <ButtonTag btnname="Redmi"/>
                              <ButtonTag btnname="Apple"/>
                              <ButtonTag btnname="Oppo"/>
                              <ButtonTag btnname="samgsung"/>
                              <ButtonTag btnname="Asus"/>
                              <ButtonTag btnname="Lenovo"/>
                              <ButtonTag btnname="HTC"/>
                              <ButtonTag btnname="Vivo"/>
                              <ButtonTag btnname="OnePlus"/>
                          </div>

                          <div>
                          <h4 style={{marginTop:"30px"}}>Select Range:</h4> 
                             <Rangebtn/>
                          </div>
                        </div>
                        <div className="col-md-9">
                            <ul style={{display:"block"}}>
                                <li style={{display:"inline"}}><strong>SORT BY:</strong></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Price Low to High</a></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Price High to Low</a></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Alphabetically Low to High</a></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Alphabetically High to Low</a></li>
                            </ul>
                            <hr></hr>

                        <div className="row" style={{marginBottom:"20px"}}>
                            <Card pic="https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg" name="One Plus 7T" price=" 35000" />
                            <Card pic="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg" name="One Plus 8" price=" 41000" />
                            <Card pic="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX679_.jpg" name="One Plus 8 Pro" price=" 52000" />
                            <Card pic="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg" name="RedmiNote 9 Pro" price=" 15000" />
                            <Card pic="https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg" name="Redmi POCO F3" price=" 21000" />
                            <Card pic="https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg" name="Apple Iphone 7" price=" 27000" />
                            <Card pic="https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg" name="Samgsung Galaxy S20" price=" 25000" />
                            <Card pic="https://static.toiimg.com/thumb/msid-77908242,width-640,resizemode-4/77908242.jpg" name="Realme 7 Pro" price=" 14000" />
                        </div>  
                        </div>
                    </div>
                </div>

                <FooterPage/>
            </div>
        );
    }
}

export default App;