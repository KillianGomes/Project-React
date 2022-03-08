import React from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit';


const Liste = (props)=> {
   
    return (
        <>
        <table className="table table-striped text-center">
            <thead className='thead-dark'>
                <tr>
                    <th>Id</th><th>Marque</th><th>Modele</th><th>Pays</th><th>Image</th><th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.voitures ? props.voitures.map((voiture, index) =>{
                    return(
                        <tr key={index}>
                            <td>{voiture.id}</td>
                            <td>{voiture.marque}</td>
                            <td>{voiture.modele}</td>
                            <td>{voiture.pays}</td>
                            <td> 
                                <img src={process.env.PUBLIC_URL + '/images/'+voiture.image} width="80" alt={voiture.image}/> 
                            </td>
                            {/* <td>
                                <Link onClick={()=>{props.editVoiture(voiture)}} data-toggle="modal" data-target="#editmyModal" 
                                className="btn btn-success" 
                                >Edit</Link>
                            </td> */}
                            <td>
                            <button className="btn btn-success" data-toggle="modal" data-target="#editModal"
                                onClick={() =>{props.editVoiture(index)
                                              }}>
                                    <i className="fa fa-pen"> Editer</i>
                                </button>
                            </td> 
                            <td>
                                <button className="btn btn-danger" 
                                onClick={() =>{if(window.confirm('Etes vous sûr de  supprimer'))
                                                {props.deleteVoiture(index)
                                              };
                                        }}>
                                    <i className="fa fa-trash"> Supprimer</i>
                                </button>
                            </td>
                        </tr>
                    )
                })
                
                 : "Pas de donnees" }
            </tbody>

        </table>

        </>
        
     );
    
}
 
export default Liste;