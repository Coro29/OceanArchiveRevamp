"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const reactstrap_1 = require("reactstrap");
class ChangePasswordModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, toggle: this.props.toggle },
            React.createElement(reactstrap_1.ModalHeader, null, "CHANGE PASSWORD"),
            React.createElement(reactstrap_1.ModalBody, null,
                React.createElement(reactstrap_1.FormGroup, { className: 'changePwdBody' },
                    React.createElement(reactstrap_1.Label, { for: 'oldpw' }, "Old Password"),
                    React.createElement(reactstrap_1.Input, { type: 'password', name: 'oldpw', id: 'oldpw' }),
                    React.createElement(reactstrap_1.Label, { for: 'newpw' }, "New Password"),
                    React.createElement(reactstrap_1.Input, { type: 'password', name: 'newpw', id: 'newpw' }),
                    React.createElement(reactstrap_1.Label, { for: 'newpwrepeat' }, "Repeat New Password"),
                    React.createElement(reactstrap_1.Input, { type: 'password', name: 'newpwrepeat', id: 'newpwrepeat' }))),
            React.createElement(reactstrap_1.ModalFooter, { className: 'changePwdFooter' },
                React.createElement("div", { className: 'cancelDeleteButton', onClick: this.props.toggle }, "Cancel"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: 'confirmpassword', onClick: this.props.toggle }, "Confirm change password"))));
    }
}
class DeleteAccountModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, toggle: this.props.toggle },
            React.createElement(reactstrap_1.ModalHeader, null, "DELETE ACCOUNT"),
            React.createElement(reactstrap_1.ModalBody, { className: 'manageModalOuter' },
                React.createElement("div", null, "Delete this account?"),
                React.createElement("div", { className: 'manageDeleteButtons' },
                    React.createElement("div", { className: 'cancelDeleteButton', onClick: this.props.toggle }, "Cancel"),
                    React.createElement("div", { className: 'confirmDeleteButton', onClick: this.props.toggle }, "Yes, delete this account")))));
    }
}
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.toggleChangePwdModal = () => {
            this.setState({
                isChangePwdModalOpen: !this.state.isChangePwdModalOpen
            });
        };
        this.toggleDeleteAccountModal = () => {
            this.setState({
                isDeleteAccountModalOpen: !this.state.isDeleteAccountModalOpen
            });
        };
        this.state = {
            isChangePwdModalOpen: false,
            isDeleteAccountModalOpen: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'profileContainer' },
            React.createElement(ChangePasswordModal, { isOpen: this.state.isChangePwdModalOpen, toggle: this.toggleChangePwdModal }),
            React.createElement(DeleteAccountModal, { isOpen: this.state.isDeleteAccountModalOpen, toggle: this.toggleDeleteAccountModal }),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { md: 2 },
                    React.createElement("img", { src: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg', width: '80%' })),
                React.createElement(reactstrap_1.Col, { md: 2 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement("h1", null, "Hey Admin"),
                        React.createElement("br", null),
                        React.createElement(reactstrap_1.Label, { for: "" }, "First Name"),
                        React.createElement(reactstrap_1.Input, { type: "text", name: "fname", id: "fname", value: "Yap", placeholder: "" }))),
                React.createElement(reactstrap_1.Col, { md: 2 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement("h1", null),
                        React.createElement("br", null),
                        React.createElement(reactstrap_1.Label, { for: "" }, "Last Name"),
                        React.createElement(reactstrap_1.Input, { type: "text", name: "lname", id: "lname", value: "Marcus", placeholder: "" }))),
                React.createElement(reactstrap_1.Col, { md: 3 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement("h1", null),
                        React.createElement("br", null),
                        React.createElement(reactstrap_1.Label, { for: "" }, "Email"),
                        React.createElement(reactstrap_1.Input, { type: "text", name: "email", id: "email", value: "abc123@fakeemail.com", placeholder: "" }))),
                React.createElement(reactstrap_1.Col, { md: 3 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("div", { className: 'profileFooterbtn photo save', onClick: this.toggleChangePwdModal }, "change password")))),
            React.createElement("div", { className: 'profileFooterbtn photo save' }, "Upload profile picture"),
            React.createElement("br", null),
            React.createElement("h1", null, "Other Informations:"),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { md: 3 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, { for: "" }, "City"),
                        React.createElement(reactstrap_1.Input, { type: "text", name: "city", id: "city", value: "Wollongong", placeholder: " " }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(reactstrap_1.Label, { for: "" }, "Country"),
                        React.createElement(reactstrap_1.Input, { type: "text", name: "country", id: "country", value: "Australia", placeholder: "" }))),
                React.createElement(reactstrap_1.Col, { md: 3 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, { for: "" }, "Field of Experties"),
                        React.createElement(reactstrap_1.Input, { type: "text", name: "field", id: "field", value: "Design", placeholder: "" }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(reactstrap_1.Label, { for: "" }, "Position"),
                        React.createElement(reactstrap_1.Input, { type: "text", name: "position", id: "position", value: "Designer", placeholder: "" }))),
                React.createElement(reactstrap_1.Col, { md: 6 },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.Label, { for: 'biography' }, "Biography"),
                        React.createElement(reactstrap_1.Input, { type: 'textarea', name: 'biography', id: 'biography', value: "Hi, everyone", placeholder: "" })))),
            React.createElement("div", null,
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { for: 'website' }, "Website"),
                    React.createElement(reactstrap_1.Input, { type: 'text', name: 'website', id: 'website', value: "https://staging.ocean-archive.org/" }),
                    React.createElement(reactstrap_1.FormText, { color: "muted" }, "* Website URL must start with http:// or https://")),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { for: 'socialmedia' }, "Social Media (URL)"),
                    React.createElement(reactstrap_1.Input, { type: 'text', name: 'subtitle', id: 'subtitle', value: "https://staging.ocean-archive.org/" }),
                    React.createElement(reactstrap_1.FormText, { color: "muted" }, "* All URL's must start with http:// or https://")),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { for: 'affiliation' }, "Affiliation"),
                    React.createElement(reactstrap_1.Input, { type: 'text', name: 'affiliation', id: 'affiliation' })),
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement("input", { className: 'checkBox', type: 'checkbox', id: '', name: '', value: 'TAC' }),
                        React.createElement("label", { className: 'checkBoxLabel', for: 'termsAndConditions' }, "Make my profile public")),
                    React.createElement(reactstrap_1.FormText, { color: "muted" }, "By enabling this you accept that all your information will be viewable by the general public."))),
            React.createElement("div", { className: 'profileFooter' },
                React.createElement("div", { className: 'profileFooterbtn delete', onClick: this.toggleDeleteAccountModal }, "Delete Account"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: 'profileFooterbtn save' }, "Save"))));
    }
}
exports.default = Profile;
//# sourceMappingURL=Profile.js.map