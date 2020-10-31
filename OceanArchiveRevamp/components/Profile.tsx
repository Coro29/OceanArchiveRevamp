declare var require: any

var React = require('react');

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink, Modal, ModalHeader,Form,
    FormFeedback,Label,ModalFooter,Input,CustomInput,FormText,Col,Row,
    FormGroup,} from 'reactstrap';



class Profilepart1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            
                <Row>
                    <Col md={2}>
                        <img src='https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg'  width='80%'></img>
                    </Col>
                    
                    
                <Col md={2}>
                <FormGroup>
                    <h1>Hey Admin</h1>
                    <br></br>  
                <Label for="">First Name</Label>
                <Input type="text" name="fname" id="fname" placeholder="" />
                </FormGroup>
                </Col>


                <Col md={2}>
                <FormGroup>
                    <h1></h1>
                    <br></br>
                <Label for="">Last Name</Label>
                <Input type="text" name="fname" id="fname" placeholder="" />
                </FormGroup>
                </Col>

                <Col md={3}>
                <FormGroup>
                    <h1></h1>
                    <br></br>
                <Label for="">Email</Label>
                <Input type="text" name="fname" id="fname" placeholder="" />
                </FormGroup>
                </Col>

                <Col md={3}>
                <FormGroup>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='profileFooterbtn save'>Change Password</div>
                </FormGroup>
                </Col>
                       

                </Row>
            
            
        );
    }
}

class Profilepart2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="">City</Label>
                <Input type="text" name="city" id="city" placeholder="" />
                <br></br>
                <br></br>
                <br></br>
                <Label for="">Country</Label>
                <Input type="text" name="country" id="country" placeholder="" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="">Field of Experties</Label>
                <Input type="password" name="field" id="field" placeholder=""/>
                <br></br>
                <br></br>
                <br></br>
                <Label for="">Position</Label>
                <Input type="text" name="position" id="position" placeholder=""/>
              </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for='Biography'>Biography</Label>
                    <Input type='textarea' name='dBiographyesc' id='Biography' placeholder="" />
                </FormGroup>
            </Col>
          </Row>
         




        );
    }
}

class Profilepart3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <FormGroup>
                    <Label for='website'>Website</Label>
                    <Input type='text' name='website' id='website'  />
                    <FormText color="muted">* Website URL must start with http:// or https://</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='socialmedia'>Social Media (URL)</Label>
                    <Input type='text' name='subtitle' id='subtitle'  /> 
                    <FormText color="muted">* All URL's must start with http:// or https://</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for='affiliation'>Affiliation</Label>
                    <Input type='text' name='affiliation' id='affiliation'  />
                </FormGroup>
                <FormGroup>
                <div style={{ display: 'flex' }}>
                    <input className='checkBox' type='checkbox' id='' name='' value='TAC' />
                    <label className='checkBoxLabel' for='termsAndConditions'>Make my profile public</label>
                    </div>
                    <FormText color="muted">By enabling this you accept that all your information will be viewable by the general public.</FormText>
                </FormGroup>
            </div>
        );
    }
}

class Profilefooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ModalFooter className='profileFooter'>
            <div className='profileFooterbtn delete' onClick={this.toggle}>Delete Account</div>
            <div className='fillerBox' />
            <div className='profileFooterbtn save'>Save</div>
            </ModalFooter>
        );
    }
}





export default class Profile extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {
        
        return (
            <div className="ICAcontainer abc">
                
                
                <div className='listSection'>
                <div className='createItemPage'>
                    <Profilepart1 /> 
                    <div className='profileFooterbtn save'>Upload profile picture</div>
                    <br></br>
                    <h1>Other Informations:</h1>
                    <Profilepart2 />
                    <Profilepart3 />
                    <Profilefooter />
                    </div>
                </div>
                
            </div >
        );
    }
}