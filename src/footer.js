import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class FooterPage extends Component{

    render(){
        return (
          <div style={{marginTop: "50px"}}>
            <MDBFooter color="danger-color" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                  <MDBCol md="12">
                    <h2 className="title">WebECOM!</h2>
                    <p>
                     Everything you need in Electronics!
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: <a href="#"> webecom.com </a>
                </MDBContainer>
              </div>
            </MDBFooter>
            </div>
          );
    }
}
  
export default FooterPage;