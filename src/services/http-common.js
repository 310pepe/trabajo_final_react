//importamos cliente http axios 
import axios from "axios";

//creamos un nuevo http con la url base de nuestra api
export default axios.create({
  baseURL: "http://localhost/gym-api/jwtlaravel/jwtlaravel/public/api"
});