import React from 'react';
import { Link } from 'react-router-dom';

const Footer =()=>{

    return(
        <div>
            <footer className='text-white py-4 bg-primary'>
                <div className='container'>
                    <nav className='row'> 
                    <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                         <img src='./img2.png' className='mx-2' height='170'/>
                         <img src='./img3.png' className='mx-2' height='120'/>
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2 text-center'>Employee-Database</li>
                        <li className='text-justyfy'>En esta aplicacion podras leer, editar e eliminar datos de los empleados de la empresa RBTEC</li>
                        <li className='text-justyfy'>R.B. Tec. México, SA de CV., fundada en 1997, cuenta con más de 21 años de experiencia en el campo de la integración de sistemas de seguridad física Inteligente para instalaciones de alto riesgo; así mismo hemos trabajado en diseño de proyectos nuevos, implementación de sistemas y mantenimientos preventivos y correctivos de los mismos.</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled text-center'>
                        
                        <li>
                        
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2 text-center'>Social Media</li>
                        <li className='d-flex justify-content-between'>
                             <i className="bi bi-facebook"/>
                             <i className="bi bi-instagram"/>
                            
                        </li>
                    </ul>
                    <div className='container'>
                        <p className='text-center'>Developer: Fernando Miguel Jimenez Juarez, Email seidstrong@outlook.es</p>
                    </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer