declare var require: any

var React = require('react');
import { NavLink } from 'react-router-dom';
import * as Constant from '../constants';
import {
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink, Modal, ModalHeader, Form,
    FormFeedback, Label, ModalFooter, Input, CustomInput, FormText, Col, Row,
    FormGroup,
    ModalBody
} from 'reactstrap';

class ChangePasswordModal extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        if (this.props.isOpen)
            this.props.closeModal();
    }


    closeModal = () => {
        this.setState({
            selectedItem: null
        });
        this.props.closeModal();
    }



    render() {
        return (
            <Modal className='largeModal' isOpen={this.props.isOpen} toggle={this.toggle}>
                <ModalHeader>CHANGE PASSWORD</ModalHeader>
                
            </Modal>
        );
    }
}

class DeleteAccountModal extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        if (this.props.isOpen)
            this.props.closeModal();
    }


    closeModal = () => {
        this.setState({
            selectedItem: null
        });
        this.props.closeModal();
    }



    render() {
        return (
            <Modal className='largeModal' isOpen={this.props.isOpen} toggle={this.toggle}>
                <ModalHeader>DELETE ACCOUNT</ModalHeader>
                
            </Modal>
        );
    }
}


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.state = {
            modalOpen: false
        }
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        });
    }
    
    closeModal = () => {
        this.setState({
            modalOpen: false
        });
    }


    render() {

        return (
            <div className='profileContainer'>
                <Row>
                    <Col md={2}>
                        <img src='https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' width='80%'></img>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <h1>Hey Admin</h1>
                            <br></br>
                            <Label for="">First Name</Label>
                            <Input type="text" name="fname" id="fname" value = "Yap" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <h1></h1>
                            <br></br>
                            <Label for="">Last Name</Label>
                            <Input type="text" name="fname" id="fname" value ="Marcus" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <h1></h1>
                            <br></br>
                            <Label for="">Email</Label>
                            <Input type="text" name="fname" id="fname" value ="mthy700@uowmail.edu.au"  placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <ChangePasswordModal ref={this.modalRef} isOpen={this.state.modalOpen} closeModal={() => this.closeModal()} addItem={(i) => this.addItem(i)} />
                                <div className='profileFooterbtn photo save' onClick={this.openModal}>
                                    change password
                                </div>
                        </FormGroup>
                    </Col>
                </Row>
                <div className='profileFooterbtn photo save'>Upload profile picture</div>
                <br></br>
                <h1>Other Informations:</h1>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="">City</Label>
                            <Input type="text" name="city" id="city" value ="Wollongong"  placeholder=" " />
                            <br></br>
                            <br></br>
                            <br></br>
                            <Label for="">Country</Label>
                            <Input type="text" name="country" id="country" value ="Australia"  placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="">Field of Experties</Label>
                            <Input type="password" name="field" id="field" value ="Design"  placeholder="" />
                            <br></br>
                            <br></br>
                            <br></br>
                            <Label for="">Position</Label>
                            <Input type="text" name="position" id="position" value ="Designer"  placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for='Biography'>Biography</Label>
                            <Input type='textarea' name='dBiographyesc' id='Biography' value ="Hi, everyone"  placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <div >
                    <FormGroup>
                        <Label for='website'>Website</Label>
                        <Input type='text' name='website' id='website' value ="https://staging.ocean-archive.org/"  />
                        <FormText color="muted">* Website URL must start with http:// or https://</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for='socialmedia'>Social Media (URL)</Label>
                        <Input type='text' name='subtitle' id='subtitle' value ="https://staging.ocean-archive.org/"  />
                        <FormText color="muted">* All URL's must start with http:// or https://</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for='affiliation'>Affiliation</Label>
                        <Input type='text' name='affiliation' id='affiliation' />
                    </FormGroup>
                    <FormGroup>
                        <div style={{ display: 'flex' }}>
                            <input className='checkBox' type='checkbox' id='' name='' value='TAC' />
                            <label className='checkBoxLabel' for='termsAndConditions'>Make my profile public</label>
                        </div>
                        <FormText color="muted">By enabling this you accept that all your information will be viewable by the general public.</FormText>
                    </FormGroup>
                </div>
                <div className='profileFooter'>
                    <DeleteAccountModal ref={this.modalRef} isOpen={this.state.modalOpen} closeModal={() => this.closeModal()} addItem={(i) => this.addItem(i)} />
                        <div className='profileFooterbtn delete' onClick={this.openModal}>
                            Delete Account
                        </div>
                    <div className='fillerBox' />
                    <div className='profileFooterbtn save'>Save</div>
                </div>
            </div>
        );
    }
}