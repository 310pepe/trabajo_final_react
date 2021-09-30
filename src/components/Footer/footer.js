//importación de la clase Component
import React,{ Component } from "react";

//importación de estilos
import "./miestilo.css";

//creacion del componente footer
class Footer extends Component{

    render(){
        return(
            <div className="main-footer mt-5">
                <div className="container-fluid">
                    <div className="row">
                        {/*column1*/}
                        <div className="col">
                            <h4>GYM STYLE'S</h4>
                            <ul className="list-unstyled">
                                <li>+57 67890845</li>
                                <li>Bogotá Colombia</li>
                                <li>Calle 500 70A-67</li>
                            </ul>
                        </div>
                        {/*column2*/}
                        <div className="col">
                            <h4>CLASES</h4>
                            <ul className="list-unstyled">
                                <li>YOGA</li>
                                <li>TRX</li>
                                <li>BOXEO</li>
                                <li>E.FUNCIONAL</li>
                            </ul>
                        </div>
                        {/*column3*/}
                        <div className="col">
                            <h4>CONTACTANOS</h4>
                            <ul className="list-unstyled">
                                <li>GymStiles@gmail.com</li>
                                <li>servicioalcliente@gymstyles.com</li>
                                <li>NIT: 7987.6524.3555-00</li>
                                <li><img
                                src="https://validator.w3.org/images/w3c.png"
                                alt="Imagen de Logo de W3C"
                                width="50px"
                                height="30px"
                            /></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="col-sm text-center">
                            &copy;{new Date().getFullYear()}GYM STYLE'S|TODOS LOS DERECHOS RESERVADOS|TERMINOS Y CONDICIONES|PRIVACIDAD
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

//exportación del componente
export default Footer;