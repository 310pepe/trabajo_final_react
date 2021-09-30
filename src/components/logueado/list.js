//importaciones necesarias de react
import React from "react";

//creación del componente
const ClaseD = (props)=>{
    //establecer a la variable el valor de dia(valor enviado por componente padre)
    const dia= props.day;
    //establecer a la variable el valor de clases(valor enviado por componente padre)
    const clases= props.clases;

    //funcion para renderizar las clases
    const Prueba=()=>{
        //establecer a hola las clases renderizadas
        let hola =clases.map(clase=>{
            //validar si la clase existe y si el dia es el correspondiente
            if(clase && clase.day===dia)
            {
                //retorno de la clase renderizada
               return (
                <div class="card flex-row flex-wrap">
                    <div class="card-header border-0">
                        <img class="img-fluid" src={clase.img} alt={clase.tipo}/>
                    </div>
                    <div class="card-block px-2">
                        <h4>
                            {clase.title}
                        </h4>
                        <p>
                            <strong>Hora de la clase:</strong> {clase.hora} <br/>
                            <strong>Instructor:</strong> {clase.inst} <br/>
                            <strong>Sede:</strong> { clase.sede } <br/>
                            <strong>Dia:</strong> {clase.dia} <br/>
                        </p>
                    </div>
                </div>
               )
            }
        });
        //retorno de las clases renderizadas
        return (<div>{hola}</div>);
    }
    //renderización del componente
    return(
        <Prueba/>
    )
}

//exportación de la clase
export default ClaseD;