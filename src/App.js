import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import { Component } from "react";


class App extends Component {
  render()
  {
    return(
    <div>
      <Navbar/>
        
      <Footer/>
    </div>
    
    );
  }
}

export default App;
