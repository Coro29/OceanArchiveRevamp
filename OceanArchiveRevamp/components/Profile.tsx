declare var require: any

var React = require('react');

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink, Modal, ModalHeader,Form,
    FormFeedback,Label,ModalFooter,Input,CustomInput,FormText,Col,Row,Logo,
    FormGroup,} from 'reactstrap';

import Profilepic from '../images/profile.png';


class Profilepart1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            
                <Row>
                <Col md={4}>
                    <Logo img={Profilepic} />
                </Col>
                <Col md={4}>
                    Hey,Admin
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
            
            <Row  >
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
            <div className='createItemPage'>
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
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Make my profile public" />
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

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    openModal = (i) => {
        this.setState({
            modalOpen: true,
            editingIndex: i
        });
    }





    render() {
        
        return (
            <div className="ICAcontainer">
                
                
                <div className='listSection'>
                
                    <Profilepart1 />
                    <Profilepart2 />
                    <Profilepart3 />
                
                </div>
                <Profilefooter />
            </div >
        );
    }
}