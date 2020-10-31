"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const reactstrap_1 = require("reactstrap");
class Profilepart1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 2 },
                React.createElement("img", { src: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg', width: '80%' })),
            React.createElement(reactstrap_1.Col, { md: 2 },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement("h1", null, "Hey Admin"),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.Label, { for: "" }, "First Name"),
                    React.createElement(reactstrap_1.Input, { type: "text", name: "fname", id: "fname", placeholder: "" }))),
            React.createElement(reactstrap_1.Col, { md: 2 },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement("h1", null),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.Label, { for: "" }, "Last Name"),
                    React.createElement(reactstrap_1.Input, { type: "text", name: "fname", id: "fname", placeholder: "" }))),
            React.createElement(reactstrap_1.Col, { md: 3 },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement("h1", null),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.Label, { for: "" }, "Email"),
                    React.createElement(reactstrap_1.Input, { type: "text", name: "fname", id: "fname", placeholder: "" }))),
            React.createElement(reactstrap_1.Col, { md: 3 },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'profileFooterbtn save' }, "Change Password")))));
    }
}
class Profilepart2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.Row, null,
            React.createElement(reactstrap_1.Col, { md: 3 },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { for: "" }, "City"),
                    React.createElement(reactstrap_1.Input, { type: "text", name: "city", id: "city", placeholder: "" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.Label, { for: "" }, "Country"),
                    React.createElement(reactstrap_1.Input, { type: "text", name: "country", id: "country", placeholder: "" }))),
            React.createElement(reactstrap_1.Col, { md: 3 },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { for: "" }, "Field of Experties"),
                    React.createElement(reactstrap_1.Input, { type: "password", name: "field", id: "field", placeholder: "" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.Label, { for: "" }, "Position"),
                    React.createElement(reactstrap_1.Input, { type: "text", name: "position", id: "position", placeholder: "" }))),
            React.createElement(reactstrap_1.Col, { md: 6 },
                React.createElement(reactstrap_1.FormGroup, null,
                    React.createElement(reactstrap_1.Label, { for: 'Biography' }, "Biography"),
                    React.createElement(reactstrap_1.Input, { type: 'textarea', name: 'dBiographyesc', id: 'Biography', placeholder: "" })))));
    }
}
class Profilepart3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'website' }, "Website"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'website', id: 'website' }),
                React.createElement(reactstrap_1.FormText, { color: "muted" }, "* Website URL must start with http:// or https://")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'socialmedia' }, "Social Media (URL)"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'subtitle', id: 'subtitle' }),
                React.createElement(reactstrap_1.FormText, { color: "muted" }, "* All URL's must start with http:// or https://")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'affiliation' }, "Affiliation"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'affiliation', id: 'affiliation' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.CustomInput, { type: "switch", id: "exampleCustomSwitch", name: "customSwitch", label: "Make my profile public" }),
                React.createElement(reactstrap_1.FormText, { color: "muted" }, "By enabling this you accept that all your information will be viewable by the general public."))));
    }
}
class Profilefooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.ModalFooter, { className: 'profileFooter' },
            React.createElement("div", { className: 'profileFooterbtn delete', onClick: this.toggle }, "Delete Account"),
            React.createElement("div", { className: 'fillerBox' }),
            React.createElement("div", { className: 'profileFooterbtn save' }, "Save")));
    }
}
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = () => {
            this.setState({
                modalOpen: !this.state.modalOpen
            });
        };
        this.openModal = (i) => {
            this.setState({
                modalOpen: true,
                editingIndex: i
            });
        };
    }
    render() {
        return (React.createElement("div", { className: "ICAcontainer abc" },
            React.createElement("div", { className: 'listSection' },
                React.createElement("div", { className: 'createItemPage' },
                    React.createElement(Profilepart1, null),
                    React.createElement("div", { className: 'profileFooterbtn save' }, "Upload profile picture"),
                    React.createElement("br", null),
                    React.createElement("h1", null, "Other Informations:"),
                    React.createElement(Profilepart2, null),
                    React.createElement(Profilepart3, null),
                    React.createElement(Profilefooter, null)))));
    }
}
exports.default = Profile;
//# sourceMappingURL=Profile.js.map