import http from "./http-common";


const obtenerUsuaros = ()=>{
    return http.get("/users");
}

const verificarUsuario=(data)=>{
    console.log(data);
    return http.post("/auth/login",data);
}

const crearUsuario=(data)=>{
    console.log(data);
    return http.post("/auth/register",data);
}

const infoIngresado=(data)=>{
    console.log(data);
    return http.post("/auth/me",data);
}

const infoEntrenador=(data)=>{
    console.log(data);
    return http.get("/users/"+data);
}
const updateEntrenador=(id,data)=>{
    console.log(data);
    return http.put("/users/"+id,data);
}
const deleteEntrenador=(id)=>{
    return http.delete("/users/"+id);
}
const GymService ={
    obtenerUsuaros,
    verificarUsuario,
    crearUsuario,
    infoIngresado,
    infoEntrenador,
    updateEntrenador,
    deleteEntrenador
}

export default GymService;