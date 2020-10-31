"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
class Profilepart1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'listItemContainer row', style: { fontWeight: 'bold' } },
            React.createElement("div", { className: 'col-md-3' }, "profile pictures"),
            React.createElement("div", { className: 'col-md-3' }, "First Name"),
            React.createElement("div", { className: 'col-md-3' }, "Last Name"),
            React.createElement("div", { className: 'col-md-3' }, "change password")));
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
        this.deleteItem = () => {
            var dataSet = this.state.dataSet;
            dataSet.splice(this.state.editingIndex, 1);
            this.setState({
                dataSet: dataSet,
                modalOpen: false
            });
        };
    }
    render() {
        const { currentPage } = this.state;
        return (React.createElement("div", { className: "ICAcontainer" },
            React.createElement("h1", null, "My porfile"),
            React.createElement("div", { className: 'listSection' },
                React.createElement(Profilepart1, null))));
    }
}
exports.default = Profile;
//# sourceMappingURL=Profile.js.map