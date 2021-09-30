import React,{useState,/*useEffect*/} from "react";
import { useDispatch,/*useSelector */} from "react-redux";
import { verificarUsuario } from "../../actions/gym";
import "./login.css";
const Login =()=>{


  const datosPer = {
    'email':"",
    'password':""
  };
  const [pers, setPerso] = useState(datosPer);
  const [verificacion, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPerso({ ...pers, [name]: value });
  };

  const validatePerso = () => {
    
    console.log(pers);
    dispatch(verificarUsuario(pers))
      .then(response => {
        let token='';
        token=response.access_token;
        setSubmitted(false);
        localStorage.setItem('token', token);
        console.log(response);
        window.location="/home";
        
      })
      .catch(e => {
        console.log(e);
        setSubmitted(true);
      });
  };


    
        return(
          
        <main>
      <form class="formulario" id="formulario">
        
        <div class="formulario__grupo" id="grupo__correo">
          <label for="correo-in" class="formulario__label"
            >Correo Electrónico</label
          >
          <div class="formulario__grupo-input">
            <input
              type="email"
              class="formulario__input"
              name="email"
              id="correo-in"
              placeholder="correo@correo.com"
              onChange={handleInputChange}
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            El correo solo puede contener letras, numeros, puntos, guiones y
            guion bajo.
          </p>
        </div>

        
        <div class="formulario__grupo" id="grupo__password">
          <label for="password-in" class="formulario__label">Contraseña</label>
          <div class="formulario__grupo-input">
            <input
              type="password"
              class="formulario__input"
              name="password"
              onChange={handleInputChange}
              id="password-in"
            />
          </div>
          <p class="formulario__input-error"></p>
        </div>
          { verificacion?(
        <div class="formulario__mensaje" id="formulario__mensaje">
          <p>
            <i class="fas fa-exclamation-triangle"></i> <b>Error:</b> el correo
            no esta registrado o la contraseña es erronea
          </p>
        </div>): <span></span> }
      </form>

      <div class="formulario__grupo formulario__grupo-btn-enviar">
        <button
          type="submit"
          class="formulario__btn mb-2 mt-2"
          id="boton-enviar"
          onClick={validatePerso}
        >
          Enviar
        </button>
      </div>
      <div class="formulario__grupo formulario__grupo-btn-enviar">
        <button
          type="button"
          class="formulario__btn"
          id="boton10"
          
        >
          Registrar
        </button>
      </div>
    </main>   
        )
    
}

export default Login;

