//importacion de la clase component
import { Component } from "react";

//importación de estilos para la app
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//importación de componentes a renderizar
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";


//creación del componente App
class App extends Component {
  render()
  {
    return(
      //renderización de componentes
    <div>
      <Navbar/>
        
      <Footer/>
    </div>
    
    );
  }
}

//exportación del componente App
export default App;
