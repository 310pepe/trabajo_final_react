//importamos los tipos da acciones que se pueden ejecutar
import {    OBTENER_USUARIOS,
            VERIFICAR_USUARIO,
            CREAR_USUARIO,
            INFO_USUARIO,
            INFO_ENTRENADOR,
            UPDATE_ENTRENADOR,
            DELETE_ENTRENADOR
} from "./types";

//importamos el servicio con todas las peticiones http
import GymService from "../services/gymService";

//creación y exportacion de funcion para borrar un entrenador
export const deleteEntre = (id) => async (dispatch)=>{
    try{
        //ejecutamos la peticion http del servicio 
        const res = await GymService.deleteEntrenador(id);
        //si es correcto se dispara el dispatch con el tipo de acción y en el payload la respuesta de la api
        dispatch({
            type: DELETE_ENTRENADOR,
            payload: res.data,
        });
        //retorno de una promesa resuelta
        return Promise.resolve(res.data)

    }catch (err) {
        //en caso de error se muestra el error
        console.log(err);
    }
}

//creación y exportación de funcion para actualizar un entrenador
export const updateEntre = (id,data) => async (dispatch)=>{
    try{
        //ejecutamos la peticion http del servicio 
        const res = await GymService.updateEntrenador(id,data);
        //si es correcto se dispara el dispatch con el tipo de acción y en el payload la respuesta de la api
        dispatch({
            type: UPDATE_ENTRENADOR,
            payload: res.data,
        });
        //retorno de una promesa resuelta
        return Promise.resolve(res.data)

    }catch (err) {
        //en caso de error se muestra el error
        console.log(err);
    }
}

//creación y exportación de funcion para obtener todos los usuarios
//El funcionamiento de las siguientes funciones es muy similar a las dos anteriores
export const obtenerUsuaros = () => async (dispatch)=>{
    try{
        const res = await GymService.obtenerUsuaros();
        dispatch({
            type: OBTENER_USUARIOS,
            payload: res.data,
        });
        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

//creación y exportación de función para obtener la información de la persona logueada
export const infoUsuario = (data) => async (dispatch)=>{
    try{
        const res = await GymService.infoIngresado(data);
        dispatch({
            type: INFO_USUARIO,
            payload: res.data,
        });

        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

//creación y exportación de función para traer la información de un entrenador
export const infoEntre = (data) => async (dispatch)=>{
    try{
        const res = await GymService.infoEntrenador(data);
        dispatch({
            type: INFO_ENTRENADOR,
            payload: res.data,
        });

        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

//creación y exportación de función que verifica la información al intentar loguearse
export const verificarUsuario= (data)=> async (dispatch)=>{
    try{
        const res = await GymService.verificarUsuario(data);

        dispatch({
            type: VERIFICAR_USUARIO,
            payload: res.data,
          });
      
        return Promise.resolve(res.data)

    }catch(err){
        console.log(err)
        //retorna una promesa sin resolver con el error
        return Promise.reject(err);
    }
}

//creación y exportación de función para la creación de un nuevo usuario
export const crearUsuario=(data)=> async (dispatch)=>{
    try{
        const res = await GymService.crearUsuario(data);
        
        dispatch({
            type: CREAR_USUARIO,
            payload: res.data,
        });
        return Promise.resolve(res.data)

    }catch(err){
        console.log(err)
        return Promise.reject(err);
    }

}