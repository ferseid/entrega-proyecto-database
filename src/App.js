import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";

import Menu from './components/menu/Menu';
import Listar from'./components/paginas/listar';
import Crear from './components/paginas/crear';
import Editar from './components/paginas/editar';
import Footer from './components/footer/Footer';
function App() {
    return (
        <Router>
           <Menu/>
        <div className="container">
          <div>
           <br></br>
            <Route exact path="/" component={Listar}></Route>
            <Route exact path="/crear" component={Crear}></Route>
            <Route exact path="/editar" component={Editar}></Route>
            </div>
             </div>
             <br></br>
             <Footer/>
        </Router>
        
    )
}

export default App;