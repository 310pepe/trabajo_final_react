//importación de la clase Component e importación de React
import React,{Component} from "react";
//importacion componente parallax
import { Parallax } from "react-parallax"; 

    //mensaje en caso de que no esté logueado
    const mensaje="!para poder estar un una clase te tienes que registrar¡";
    //extracción del token de localstorage
    const token= localStorage.getItem('token');

    //función para la creación de las cards
    function NumberList(props) {
        //extracción de la información de las cards
        const numbers = props.numbers;
        //creación de las cards 
        const listItems = numbers.map((number) =>
        <div class="card col-3 mt-3">
            <img src={number.src} class="card-img-top mt-1" alt={number.alt} />
            <div class="card-body">
                <h5 class="card-title"> {number.title} </h5>
                <p class="card-text"> {number.description} </p>
                {
                    token?(<span></span>
                                            
                    ):(<p>{mensaje}</p>)
                }
            </div>
        </div>
        );
        //url imagen para efecto parallax
        const imagen1="https://i.pinimg.com/originals/06/b9/29/06b92953cb92f01d1b9f5e27e1e7c8e5.jpg";
        //estilo del componente parallax
        const inlineStyle={
            background:'#fff',
            left:'50%',
            top:'50%',
            position:'absolute',
            padding:'20px',
            Transform:'translate(-50%,-50%)'
        }
        //retorno de la funcion con las cards y efecto parallax
        return (
            <div class="row ">
            <Parallax bgImage={imagen1} strength={500}>
            <div style={{height:500}}>
                <div style={inlineStyle}><strong>Bienvenidos a GYM STYLE'S</strong></div>
            </div>
            </Parallax>
            {listItems}
                      </div>
        );
      }

class Home extends Component{
    //información de las cards
    cards =[ 
        {src:"img/1boxeo.png",
        alt:"Imagen de clases de boxeo",
        title:"Boxeo",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en boxeo."    
    },
        {src:"img/2yoga.png",
        alt:"Imagen de clase de yoga",
        title:"Yoga",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en Yoga.Empieza a llevar tu estilo de vida saludable."    
    },
        {src:"img/3trx.png",
        alt:"Imagen de clases de trx",
        title:"Trx",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en TRX. Empieza a llevar tu estilo de vida saludable. "    
    },
        {src:"img/4entrenamiento.png",
        alt:"Imagen de clase de entrenamiento funcional",
        title:"Entrenamiento Funcional",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en Entrenamiento funcional. Empieza a llevar tu estilo de vida saludable."    
    }];
    render(){
            return(
                //renderización del componente
                <div ><NumberList numbers={this.cards} /> </div>
            )
    }
}

//exportación del componente
export default Home;