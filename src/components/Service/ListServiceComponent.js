import React, { Component } from 'react';
import HomeService from "../../Api/Services/HomeService"
import {Link} from "react-router-dom"

class ListServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: []
        }
    }

    componentDidMount() {
        const apiUrl =  'http://localhost:4000/api/getAllCategory';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ services: data }));
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center" style={{marginTop:"15px"}}>Service List</h2>
                <div className="row">
                    <button className="btn btn-primary"> Add Service</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead style={{textAlign:"center"}}>
                            <tr>
                                <th>Sr.No</th>
                                <th> Service Name</th>
                                <th> Service Image</th>
                                <th> Service Created Date</th>
                                <th> Service Modified Date</th>
                                <th > Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign:"center"}}>
                            {
                                this.state.services.map(
                                    service =>
                                        <tr key={service.service_id}>
                                            <td>{service.service_id}</td>
                                            <td> {service.service_name} </td>
                                            <td> {service.service_image}</td>
                                            <td> {service.created_date}</td>
                                            <td>{service.modified_date}</td>
                                            <td>
                                                <button className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-info"> <Link to="ViewServiceComponent" params={{service_name:service.service_name}}>View</Link> </button>
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