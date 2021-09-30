import React,{useState,/*useEffect*/} from "react";
import { useDispatch,/*useSelector */} from "react-redux";
import { crearUsuario,verificarUsuario } from "../../actions/gym";
import "./login.css";

const Register =()=>{
    
  const datosPer = {
    'email':"",
    'password':"",
    'password2':"",
    'NameUser':"",
    'name':"",
    'Telefono':"",
    'Eps':'',
    'TelefonoEmergencia':"",
    'Rol':'usuario'
  };
  const [pers, setPerso] = useState(datosPer);
  const [verificacion, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPerso({ ...pers, [name]: value });
  };

  const crearPerso = () => {
    
    console.log(pers);
    dispatch(crearUsuario(pers))
      .then(response => {
        console.log(response);
        const {password,email} =pers;
        let pers1={
          password,
          email
        }
        dispatch(verificarUsuario(pers1)).then(response => {
          let token='';
          token=response.access_token;
          localStorage.setItem('token', token);
          window.location="/home";
        })
      })
      .catch(e => {
        console.log(e);
        setSubmitted(true);
      });
  };

        return(
            <main>
      <form class="formulario" id="formulario">
        
        <div class="formulario__grupo" id="grupo__usuario">
          <label for="usuario" class="formulario__label">Usuario</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="NameUser"
              id="usuario"
              placeholder="john123"
              onChange={handleInputChange}
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            El usuario tiene que ser de 4 a 16 dígitos y solo puede contener
            numeros, letras y guion bajo.
          </p>
        </div>

        
        <div class="formulario__grupo" id="grupo__nombre">
          <label for="nombre" class="formulario__label">Nombre</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="name"
              id="nombre"
              placeholder="John Doe"
              onChange={handleInputChange}
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            El usuario tiene que ser de 4 a 16 dígitos y solo puede contener
            numeros, letras y guion bajo.
          </p>
        </div>

       
        <div class="formulario__grupo" id="grupo__password">
          <label for="password" class="formulario__label">Contraseña</label>
          <div class="formulario__grupo-input">
            <input
              type="password"
              class="formulario__input datoinput"
              name="password"
              id="password"
              onChange={handleInputChange}
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            La contraseña tiene que ser de 4 a 12 dígitos.
          </p>
        </div>

        
        <div class="formulario__grupo" id="grupo__password2">
          <label for="password2" class="formulario__label"
            >Repetir Contraseña</label
          >
          <div class="formulario__grupo-input">
            <input
              type="password"
              class="formulario__input datoinput"
              name="password2"
              id="password2"
              onChange={handleInputChange}
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            Ambas contraseñas deben ser iguales.
          </p>
        </div>

        
        <div class="formulario__grupo" id="grupo__correo">
          <label for="correo" class="formulario__label"
            >Correo Electrónico</label
          >
          <div class="formulario__grupo-input">
            <input
              type="email"
              class="formulario__input datoinput"
              name="email"
              id="correo"
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

        
        <div class="formulario__grupo" id="grupo__telefono">
          <label for="telefono" class="formulario__label">Teléfono</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="Telefono"
              id="telefono"
              placeholder="4491234567"
              onChange={handleInputChange}
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            El telefono solo puede contener numeros y el maximo son 14 dígitos.
          </p>
        </div>

    
			<div class="formulario__grupo" id="grupo__eps">
				<label for="grupo__eps" class="formulario__label">EPS</label>
				<div class="formulario__grupo-input">
					<input type="text" 
          class="formulario__input datoinput" 
          name="Eps" 
          id="eps"
          onChange={handleInputChange}
           placeholder="cafam"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
                    
				</div>
				<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			
			<div class="formulario__grupo" id="grupo__telefonoencasodeemergencia">
				<label for="telefonoencasodeemergencia" class="formulario__label">Teléfono de algún familiar</label>
				<div class="formulario__grupo-input">
					<input type="text" 
          class="formulario__input datoinput" 
          onChange={handleInputChange}
          name="TelefonoEmergencia" id="telefonoencasodeemergencia" placeholder="4491234567"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
                    
				</div>
				<p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
			</div>

        
        <div class="formulario__grupo" id="grupo__terminos">
          <label class="formulario__label">
            <input
              class="formulario__checkbox"
              type="checkbox"
              name="terminos"
              id="terminos"
            />
            Acepto los Terminos y Condiciones
          </label>
        </div>
        { verificacion? (
        <div class="formulario__mensaje" id="formulario__mensaje">
          <p>
            <i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor
            rellena el formulario correctamente.
          </p>
        </div>):(<span></span>)}

        <div class="formulario__grupo formulario__grupo-btn-enviar">
          <button type="button" class="formulario__btn" id="btn-en" onClick={crearPerso} >
            Enviar
          </button>
          <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">
            Formulario enviado exitosamente!
          </p>
        </div>

        <div class="formulario__grupo formulario__grupo-btn-enviar">
          <button
            type="button"
            id="enviar2"
            class="formulario__btn"
            onclick="loguear()"
          >
            Ingresar
          </button>
        </div>
      </form>
      <script src="./propio.js"></script>
    </main>
        )
    
}

export default Register;
