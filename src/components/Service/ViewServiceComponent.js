import React, { Component } from 'react';
import HomeService from "../../Api/Services/HomeService"
import {Link} from "react-router-dom"
class ViewServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: []
        }
    }
    // componentDidMount() {
    //     HomeService.getService().then((res) => {
    //         this.setState({ services: res.data });
    //     });
    // }
        

    componentDidMount() {
       
        const apiUrl =  'http://localhost:4000/api/getAllSubCategory';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ services: data }));
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center" style={{marginTop:"15px"}}>Subservice List</h2>
                <div className="row">
                    <button className="btn btn-primary"> Add Subservice</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead style={{textAlign:"center"}}>
                            <tr>
                                <th>Sr.No</th>
                                <th> Service Name</th>
                                <th> Service Image</th>
                                <th> Service Modified Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign:"center"}}>
                            {
                                this.state.services.map(
                                    service =>
                                        <tr key={service.subservice_id}>
                                            <td>{service.subservice_id}</td>
                                            <td> {service.sub_servicename} </td>
                                            <td> {service.image}</td>
                                            <td>{service.modified_date}</td>
                               
                                            <td>
                                                <button className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-info"> <Link to="UpdateServiceComponent" params={{service_name:service.service_name}}>View</Link> </button>
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

export default ViewServiceComponent;