import { 
    CREAR_USUARIO,
    INFO_ENTRENADOR,
    INFO_USUARIO,
    OBTENER_USUARIOS,
    VERIFICAR_USUARIO
} from "../actions/types";

const initialState = [];

function gymReducer(gyms = initialState, action)
{
    const { type, payload } = action;

    switch (type){
        case OBTENER_USUARIOS:
            return  [...gyms, payload];
        
        case VERIFICAR_USUARIO:
            return  [...gyms, payload];
        
        case CREAR_USUARIO:
            return  [ payload];

        case INFO_USUARIO:
            return  payload;

        default:
            return gyms ;
    }
}

export default gymReducer;