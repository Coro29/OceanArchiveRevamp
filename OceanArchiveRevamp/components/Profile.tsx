declare var require: any

var React = require('react');

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink, Modal, ModalHeader } from 'reactstrap';


class Profilepart1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='listItemContainer row' style={{ fontWeight: 'bold' }}>
                <div className='col-md-3'>profile pictures</div>
                <div className='col-md-3'>First Name</div>
                <div className='col-md-3'>Last Name</div>
                <div className='col-md-3'>change password</div>
            </div>
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

    deleteItem = () => {
        var dataSet = this.state.dataSet;
        dataSet.splice(this.state.editingIndex, 1);
        this.setState({
            dataSet: dataSet,
            modalOpen: false
        });
    }



    render() {
        const { currentPage } = this.state;
        return (
            <div className="ICAcontainer">
                <h1>My porfile</h1>
                
                <div className='listSection'>
                    <Profilepart1 />

                </div>

            </div >
        );
    }
}