import React , {useContext} from 'react'
import { ClientContext } from './ClientContext'
import { Link } from 'react-router-dom'

export const ListClient = () => {
    const {clients, deleteClient} = useContext(ClientContext)
  return (
    <div>
         <Link to="/newcliente">
        Nuevo Cliente
      </Link>
        <h1>Lista de Clientes</h1>
        <table className="table table-bordered p-5">
            <thead>

           
            <tr>
                <th>Id</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Documento</th>
                <th>Tipo Documento</th>
                <th>Grado</th>
                <th>Fecha Nacimiento</th>
                <th>Estado Civil</th>
                <th>Accion</th>
            </tr>
             </thead>
             <tbody>  
{
                clients.map(client => (
                  
                        <tr>
                            <td>{client.id}</td>
                            <td>{client.nombres}</td>
                            <td>{client.apellidos}</td>
                            <td>{client.documento}</td>
                            <td>{client.tipoDocumento}</td>
                            <td>{client.grado}</td>
                            <td>{client.fechaNacimiento}</td>
                            <td>{client.estadoCivil}</td>
                            <td>          
                                <button className="btn btn-danger" onClick={() => deleteClient(client.id)}>Eliminar</button>
                            </td>
                        </tr>
                    
                   
                ))
            }
</tbody>   
        </table>
            
        
    </div>
  )
}