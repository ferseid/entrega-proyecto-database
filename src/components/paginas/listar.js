import React from 'react';
import { Link } from "react-router-dom";
class listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
                <div className="card-header text-center">
                    Empleados RBTEC ANDMASE
                </div>
                <div className="card-body">
                <table className="table">
                <thead>
                    <tr>
                        <th>Nombre (s)</th>
                        <th>Puesto</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Profecion</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fernando Miguel Jimenez Juarez </td>
                        <td>Auxiliar</td>
                        <td>seidstrong@outlook.es</td>
                        <td>9341121311</td>
                        <td>Villahermosa</td>
                        <td>Ing. Sistemas Computacionales</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-outline-warning"to={"/editar"}>Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
                </div>
                <div className="card-Footer text-muted">
                    
                </div>
            </div>
         );
    }
}
 
export default listar;

