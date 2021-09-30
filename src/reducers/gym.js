//importación de los tipos de acciones
import { 
    CREAR_USUARIO,
    INFO_ENTRENADOR,
    INFO_USUARIO,
    OBTENER_USUARIOS,
    VERIFICAR_USUARIO
} from "../actions/types";

//creación del estado inicial del reducer
const initialState = [];

//creación del reducer
function gymReducer(gyms = initialState, action)
{
    //creación de las variable type y payload de la variable action
    const { type, payload } = action;

    //validacion del type y acciones para cada una
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

//exportación del reducer
export default gymReducer;