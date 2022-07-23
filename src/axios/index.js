import axios from "axios";
import cookies from "react-cookies";

const token = cookies.load("jwt_token");
export default axios.create({
    baseURL: 'http://course-enrollment-alb-726030892.us-west-2.elb.amazonaws.com:8080',
    headers: {
        "Authorization" : `Bearer ${token}`
    }
});