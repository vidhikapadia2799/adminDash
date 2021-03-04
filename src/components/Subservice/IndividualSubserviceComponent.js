// import React from "react"

// const IndividualSubserviceComponent = ({service_name}) => {
//     return(
//         <div>
//         <h2>helo</h2>
//         {/* {console.log(service_name)} */}
//         </div>
        
//     )
// }

// export default IndividualSubserviceComponent

import React, { Component, useState } from 'react';
import { Link } from "react-router-dom"
// import { CreateServiceComponent } from "./CreateServiceComponent"
// import { UpdateServiceComponent } from "./UpdateServiceComponent"
import { ButtonToolbar } from 'react-bootstrap';

class IndividualServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            individualservices: [],
            addModalShow: false,
            editModalShow: false
        }
    }

    componentDidMount() {
        const catname = this.props.service_name
        console.log(catname)
        const apiUrl = 'http://localhost:4000/api/getCategoryByName/' + catname;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({individualservices: data }));
    }


    // deleteService(serviceId) {
    //     console.log("Delete", serviceId)
    //     const { services } = this.state;

    //     const id = serviceId;
    //     const apiUrl = 'http://localhost:4000/api/DeleteService/' + id;
    //     const formData = new FormData();
    //     formData.append('serviceId', serviceId);

    //     const options = {
    //         method: 'DELETE',
    //         body: formData
    //     }

    //     fetch(apiUrl, options)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     response: result,
    //                     services: services.filter(service => service.service_id !== serviceId)
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({ error });
    //             }
    //         )
    // }

    render() {
        // const { services, sid, sname, simage } = this.state;

        var addModalClose = () => this.setState({ addModalShow: false });
        var editModalClose = () => this.setState({ editModalShow: false });

        return (
            <div className="container">
                <h2 className="text-center" style={{ marginTop: "15px" }}>SubServices</h2>
                <div className="row">
                    <ButtonToolbar>
                        <button className="btn btn-primary" onClick={() => this.setState({ addModalShow: true })}> Add Service</button>
                        {/* <CreateServiceComponent show={this.state.addModalShow} onHide={addModalClose} /> */}
                    </ButtonToolbar>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>Service Name</th>
                                <th>Subservice Name</th>
                                <th>Provider Name</th>
                                <th>Subservice Image</th>
                                <th>Subservice price</th>
                                <th>Subservice duration</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.individualservices.map(
                                    individualservice =>
                                        <tr key={ individualservice.subservice_id }>
                                            <td>{this.props.service_name}</td>
                                            <td>{ individualservice.sub_servicename } </td>
                                            <td>{ individualservice.providername}</td>
                                            <td>{individualservice.image}</td>
                                            <td>{individualservice.price}</td> 
                                            <td>{individualservice.time_duration}</td>
                                            {/* <td>
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
                                                        sid = {sid}
                                                        sname={sname}
                                                        simage={simage} 
                                                    />
                                                </ButtonToolbar>
                                            </td>
                                            <td>
                                                <ButtonToolbar>                          
                                                    <button className="btn btn-primary"><Link to= {{ pathname: '/individualservice/service_name', state: { service_name : service.service_name} }}>View</Link></button>
                                                </ButtonToolbar>
                                            </td>
                                            <td>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteService(service.service_id) }}>Delete </button>
                                                {/* <button style={{ marginLeft: "10px" }} className="btn btn-info"> <Link to="ViewServiceComponent" params={{ service_name: service.service_name }}>View</Link> </button> */}
                                            {/* </td> */}
                                            
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

export default IndividualServiceComponent;