declare var require: any

var React = require('react');
import { NavLink } from 'react-router-dom';
import * as Constant from '../constants';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormFeedback,
    Label,
    Input,
    CustomInput,
    FormText,
    Col,
    Row,
    FormGroup
} from 'reactstrap';

class ChangePasswordModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader>CHANGE PASSWORD</ModalHeader>
                <ModalBody>
                    <FormGroup className='changePwdBody'>
                        <Label for='oldpw'>Old Password</Label>
                        <Input type='password' name='oldpw' id='oldpw' />

                        <Label for='newpw'>New Password</Label>
                        <Input type='password' name='newpw' id='newpw' />

                        <Label for='newpwrepeat'>Repeat New Password</Label>
                        <Input type='password' name='newpwrepeat' id='newpwrepeat' />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className='changePwdFooter'>
                    <div className='cancelDeleteButton' onClick={this.props.toggle} >Cancel</div>
                    <div className='fillerBox' />
                    <div className='confirmpassword' onClick={this.props.toggle}>Confirm change password</div>
                </ModalFooter>
            </Modal>
        );
    }
}

class DeleteAccountModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader>DELETE ACCOUNT</ModalHeader>
                <ModalBody className='manageModalOuter'>
                    <div>Delete this account?</div>
                    <div className='manageDeleteButtons'>
                        <div className='cancelDeleteButton' onClick={this.props.toggle}>Cancel</div>
                        <div className='confirmDeleteButton' onClick={this.props.toggle}>Yes, delete this account</div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChangePwdModalOpen: false,
            isDeleteAccountModalOpen: false
        }
    }

    toggleChangePwdModal = () => {
        this.setState({
            isChangePwdModalOpen: !this.state.isChangePwdModalOpen
        });
    }

    toggleDeleteAccountModal = () => {
        this.setState({
            isDeleteAccountModalOpen: !this.state.isDeleteAccountModalOpen
        });
    }


    render() {

        return (
            <div className='profileContainer'>
                <ChangePasswordModal isOpen={this.state.isChangePwdModalOpen} toggle={this.toggleChangePwdModal} />
                <DeleteAccountModal isOpen={this.state.isDeleteAccountModalOpen} toggle={this.toggleDeleteAccountModal} />
                <Row>
                    <Col md={2}>
                        <img src='https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' width='80%'></img>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <h1>Hey Admin</h1>
                            <br></br>
                            <Label for="">First Name</Label>
                            <Input type="text" name="fname" id="fname" value="Yap" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <h1></h1>
                            <br></br>
                            <Label for="">Last Name</Label>
                            <Input type="text" name="lname" id="lname" value="Marcus" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <h1></h1>
                            <br></br>
                            <Label for="">Email</Label>
                            <Input type="text" name="email" id="email" value="abc123@fakeemail.com" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className='profileFooterbtn photo save' onClick={this.toggleChangePwdModal}>
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
                            <Input type="text" name="city" id="city" value="Wollongong" placeholder=" " />
                            <br></br>
                            <br></br>
                            <br></br>
                            <Label for="">Country</Label>
                            <Input type="text" name="country" id="country" value="Australia" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="">Field of Experties</Label>
                            <Input type="text" name="field" id="field" value="Design" placeholder="" />
                            <br></br>
                            <br></br>
                            <br></br>
                            <Label for="">Position</Label>
                            <Input type="text" name="position" id="position" value="Designer" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for='biography'>Biography</Label>
                            <Input type='textarea' name='biography' id='biography' value="Hi, everyone" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <div >
                    <FormGroup>
                        <Label for='website'>Website</Label>
                        <Input type='text' name='website' id='website' value="https://staging.ocean-archive.org/" />
                        <FormText color="muted">* Website URL must start with http:// or https://</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for='socialmedia'>Social Media (URL)</Label>
                        <Input type='text' name='subtitle' id='subtitle' value="https://staging.ocean-archive.org/" />
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
                    <div className='profileFooterbtn delete' onClick={this.toggleDeleteAccountModal}>
                        Delete Account
                        </div>
                    <div className='fillerBox' />
                    <div className='profileFooterbtn save'>Save</div>
                </div>
            </div>
        );
    }
}