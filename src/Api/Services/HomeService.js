// import axios from "axios";
const SERVICE_API_BASE_URL = 'localhost:4000/api';

class HomeService{

    getService(){
        //return axios.get("SERVICE_API_BASE_URL" + '/getAllCategory')
        const SERVICE_GET_URL = SERVICE_API_BASE_URL + '/getAllCategory';
        fetch(SERVICE_GET_URL);
    } 
}

export default new HomeService()