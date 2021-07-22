import React, { useState, useEffect } from "react";
import ConexionApi from "../services/ConexionAxios";
function  Crear () {
    
    const variablesInicio={
        _id:"",
        nombre:"",
        puesto:"",
        email:"",
        telefono:"",
        direccion:"",
        profecion:""
    };
    
    const [values, setValues]=useState(variablesInicio)
    const [empleado, setEmpleados]=useState([]);
    
    const onChange=(e)=>{
        const{name, value}=e.target;
        setValues({...values,[name]:value});
    }


    const guardarEmpleados=async()=>{
        await ConexionApi.post("/empleado/crearEmpleado",{
            nombre: values.nombre,
            puesto: values.puesto,
            email: values.email,
            telefono: values.telefono,
            direccion: values.direccion,
            profecion: values.profecion
        }).then((res)=>{
            console.log(res);
            //console.log(data);
        });
        ListarEmpleados();
    };


    const ListarEmpleados=async()=>{
        const respuesta=await ConexionApi.get('/empleado/listarEmpleados');
        setEmpleados(respuesta.data);
        console.log(respuesta.data);
    }

    const EliminarEmpleado=async(id)=>{
        const eliminar=await ConexionApi.delete(`/empleado/eliminarEmpleado/${id}`);
        console.log(eliminar.data);
        ListarEmpleados();
    };

    const ListarOneEmpleados=async(id)=>{
        const res=await ConexionApi.get(`/empleado/listarEmpleado/${id}`);
        setValues(res.data);
        ListarEmpleados();
    }
    
    const updateEmpleado=async(id)=>{
        await ConexionApi.put(`/empleado/actualizarEmpleado/${id}`,{
            nombre: values.nombre,
            puesto: values.puesto,
            email: values.email,
            telefono: values.telefono,
            direccion: values.direccion,
            profecion: values.profecion

        }).then((res)=>{
            console.log(res.data);
        });
        ListarEmpleados();
    }

    const onClick= (e) =>{
        e.preventDefault();
        /*alert(
            "Los datos son:" +
              values.matricula +
              " " +
              values.nombre +
              " " +
              values.correo +
              " " +
              values.telefono
          );*/
        guardarEmpleados();
        setValues(variablesInicio);
    }

    useEffect(() => {
        ListarEmpleados();
    }, [])

        return ( 
            <div className="card">
                <div className="card-header">
                    Ingrese los Datos del Empleado
                </div>
                <div className="card-body">
                    <form onSubmit={onClick}>
                        <div className="form-group">
                          <label htmlFor="">Nombre Completo</label>
                          <input type="text" 
                          name="nombre" 
                          onChange={onChange}
                          value={values.nombre}
                          className="form-control" 
                          placeholder="Ingrese el Nombre"/>
                        </div>
                    </form>
                    <form onSubmit={onClick}>
                        <div className="form-group">
                          <label htmlFor="">Puesto</label>
                          <input type="text" 
                          name="puesto" 
                          onChange={onChange} 
                          value={values.puesto}
                          className="form-control" 
                          placeholder="Ingrese el Puesto"/>
                        </div>
                    </form>
                    <form onSubmit={onClick}>
                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          <input type="text" 
                          name="email" 
                          onChange={onChange}
                          value={values.email}
                          className="form-control" 
                          placeholder="Ingrese el Email"/>
                        </div>
                    </form>
                    <form onSubmit={onClick}>
                        <div className="form-group">
                          <label htmlFor="">Telefono</label>
                          <input type="text" 
                          name="telefono" 
                          onChange={onChange}
                          value={values.telefono}
                          className="form-control" 
                          placeholder="Ingrese el Telefono"/>
                        </div>
                    </form>
                    <form onSubmit={onClick}>
                        <div className="form-group">
                          <label htmlFor="">Direccion</label>
                          <input type="text" 
                          name="direccion" 
                          onChange={onChange}
                          value={values.direccion}
                          className="form-control" 
                          placeholder="Ingrese el Direccion"/>
                        </div>
                    </form>
                    <form onSubmit={onClick}>
                        <div className="form-group">
                          <label htmlFor="">Profecion</label>
                          <input type="text" 
                          name="profecion" 
                          onChange={onChange}
                          value={values.profecion}
                          className="form-control" 
                          placeholder="Ingrese el Profecion"/>
                        </div>
                    </form>
                    <br></br>
                    <button type="submit" className="btn btn-primary" onClick={onClick}>Agregar Empleado</button>
                    <button type="button" className="btn btn-success" onClick={()=>updateEmpleado(values._id)}>Actualizar Datos</button>
                </div>
                <div className="card-Footer text-muted">
                </div>

                <div className="card">
                <div className="card-header text-center">
                    Empleados RBTEC ANDMASE
                </div>
                <div className="card-body">
                <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre (s)</th>
                        <th>Puesto</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Profecion</th>
                        <th>ACCIONES</th>
                        
                    </tr>
                </thead>
                {empleado.map((emplead, index)=>(
                  <tbody key={emplead._id}>
                    <tr>
                    <th scope="row">{index + 1}</th>
                        <td>{emplead.nombre}</td>
                        <td>{emplead.puesto}</td>
                        <td>{emplead.email}</td>
                        <td>{emplead.telefono}</td>
                        <td>{emplead.direccion}</td>
                        <td>{emplead.profecion}</td>
                        <td>

                            
                        
                            <div className="btn-group" role="group" aria-label="">
                               <button className="btn btn-outline-warning" onClick={()=>ListarOneEmpleados(emplead._id)}>Editar</button >
                                <button className="btn btn-outline-danger" onClick={()=>EliminarEmpleado(emplead._id)}>Eliminar</button>

                            </div>
                        </td>
                    </tr>
                </tbody>
                ))}
               
            </table>
                </div>
                <div className="card-Footer text-muted">
                    
                </div>
            </div>

            </div>
        );
    }

export default Crear;