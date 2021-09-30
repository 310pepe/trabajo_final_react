//importamos el cliente http creado 
import http from "./http-common";

//inicio funciones que retornan peticiones http
const obtenerUsuaros = ()=>{
    return http.get("/users");
}

const verificarUsuario=(data)=>{
    return http.post("/auth/login",data);
}

const crearUsuario=(data)=>{
    return http.post("/auth/register",data);
}

const infoIngresado=(data)=>{
    console.log(data);
    return http.post("/auth/me",data);
}

const infoEntrenador=(data)=>{
    return http.get("/users/"+data);
}
const updateEntrenador=(id,data)=>{
    return http.put("/users/"+id,data);
}
const deleteEntrenador=(id)=>{
    return http.delete("/users/"+id);
}

//fin funciones 

//creamos un 'objeto' con todas las funciones creadas
const GymService ={
    obtenerUsuaros,
    verificarUsuario,
    crearUsuario,
    infoIngresado,
    infoEntrenador,
    updateEntrenador,
    deleteEntrenador
}

//exportación del 'objeto' con todas las funciones
export default GymService;