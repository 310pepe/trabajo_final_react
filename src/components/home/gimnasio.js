import React,{Component} from "react";

class Gimnasio extends Component{
    render(){
        return(
            <div class="container-fluid">
                <div class="row">
                  <div class="col fondo-negro">
                    <p class="col-sm text-center  fw-bold fs-5">
                      Gym's
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col"><br /></div>
                </div>
                <div class="row">
                  <div class="col fondo-gris">
                    <p class="col-sm text-center ">
                      Puedes encontrarnos en Mosquera Cundinamarca donde tenemos
                      nuestra sede principal alli te ofreceremos estar con
                      nuestro grupo de trabajo y ofrecemos que puedas estar
                      mejorando tu estado fisico con las mejores herramientas
                      para mejorar tu estilo de vida, en lo que desees entrenar
                      ya sea en box, yoga, trx y/o entrenamiento funcional .
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <img
                    src="img/mapa.png"
                    alt="Imagen mapa provisional"
                    class="img-fluid"
                  />
                </div>
              </div>
        )
    }
}

export default Gimnasio;