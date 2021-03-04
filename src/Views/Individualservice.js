import React from 'react'
import IndividualSubserviceComponent from '../components/Subservice/IndividualSubserviceComponent'

function Individualservice(props) {
    return (
        <div>
        <IndividualSubserviceComponent service_name = {props.location.state.service_name} />
        {/* {console.log(props.location.state)} */}
    </div>
    )
}

export default Individualservice