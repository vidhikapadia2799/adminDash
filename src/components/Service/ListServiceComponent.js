import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { CreateServiceComponent } from "./CreateServiceComponent"
import { UpdateServiceComponent } from "./UpdateServiceComponent"
import { ButtonToolbar } from 'react-bootstrap';

class ListServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [],
            addModalShow: false,
            editModalShow: false
        }
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:4000/api/getAllCategory';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ services: data }));
    }


    deleteService(serviceId) {
        console.log("Delete", serviceId)
        const { services } = this.state;

        const id = serviceId;
        const apiUrl = 'http://localhost:4000/api/DeleteService/' + id;
        const formData = new FormData();
        formData.append('serviceId', serviceId);

        const options = {
            method: 'DELETE',
            body: formData
        }

        fetch(apiUrl, options)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result,
                        services: services.filter(service => service.service_id !== serviceId)
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        const { sid, sname, simage } = this.state;

        var addModalClose = () => this.setState({ addModalShow: false });
        var editModalClose = () => this.setState({ editModalShow: false });

        return (
            <div className="container">
                <h2 className="text-center" style={{ marginTop: "15px" }}>Main Service</h2>
                <div className="row">
                    <ButtonToolbar>
                        <button className="btn btn-primary" onClick={() => this.setState({ addModalShow: true })}> Add Service</button>
                        <CreateServiceComponent show={this.state.addModalShow} onHide={addModalClose} />
                    </ButtonToolbar>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Created Date</th>
                                <th>Service Modified Date</th>
                                <th>Actions</th>
                                <th>Actions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.services.map(
                                    service =>
                                        <tr key={service.service_id}>
                                            <td>{service.service_name} </td>
                                            <td>{service.created_date}</td>
                                            <td>{service.modified_date}</td>
                                            <td>
                                                <ButtonToolbar>
                                                    <button className="btn btn-primary" onClick={() => this.setState({
                                                        editModalShow: true,
                                                        sid: service.service_id,
                                                        sname: service.service_name,
                                                        simage: service.service_image
                                                    })}>Update</button>
                                                    <UpdateServiceComponent
                                                        show={this.state.editModalShow}
                                                        onHide={editModalClose}
                                                        sid={sid}
                                                        sname={sname}
                                                        simage={simage}
                                                    />
                                                </ButtonToolbar>
                                            </td>
                                            <td>
                                                <ButtonToolbar>
                                                    <button className="btn btn-primary" onClick={e => { localStorage.setItem("service_name", service.service_name) }}><Link to='/individualservice' style={{ color: "white" }}>View</Link></button>
                                                </ButtonToolbar>
                                            </td>
                                            <td>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteService(service.service_id) }}>Delete </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListServiceComponent;