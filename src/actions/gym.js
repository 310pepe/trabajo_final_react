import {    OBTENER_USUARIOS,
            VERIFICAR_USUARIO,
            CREAR_USUARIO,
            INFO_USUARIO,
            INFO_ENTRENADOR,
            UPDATE_ENTRENADOR,
            DELETE_ENTRENADOR
} from "./types";

import GymService from "../services/gymService";

export const deleteEntre = (id) => async (dispatch)=>{
    try{
        const res = await GymService.deleteEntrenador(id);
        console.log(res);
        dispatch({
            type: DELETE_ENTRENADOR,
            payload: res.data,
        });
        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

export const updateEntre = (id,data) => async (dispatch)=>{
    try{
        const res = await GymService.updateEntrenador(id,data);
        console.log(res);
        dispatch({
            type: UPDATE_ENTRENADOR,
            payload: res.data,
        });
        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

export const obtenerUsuaros = () => async (dispatch)=>{
    try{
        const res = await GymService.obtenerUsuaros();
        console.log(res);
        dispatch({
            type: OBTENER_USUARIOS,
            payload: res.data,
        });
        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

export const infoUsuario = (data) => async (dispatch)=>{
    try{
        const res = await GymService.infoIngresado(data);
        console.log(res);
        dispatch({
            type: INFO_USUARIO,
            payload: res.data,
        });

        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

export const infoEntre = (data) => async (dispatch)=>{
    try{
        const res = await GymService.infoEntrenador(data);
        console.log(res);
        dispatch({
            type: INFO_ENTRENADOR,
            payload: res.data,
        });

        return Promise.resolve(res.data)

    }catch (err) {
        console.log(err);
    }
}

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
        return Promise.reject(err);
    }
}

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