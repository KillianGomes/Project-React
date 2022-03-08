import React, { Component, Fragment } from 'react';

class Edit extends Component {

    initVoiture = {id:-1, marque:"", modele:"", pays:"", image:""};
    state = this.initVoiture;

    componentDidUpdate = ()=>{
         const id = this.props.sharedCar.id;
         if(id !== this.state.id)
         this.setState(this.props.sharedCar);
    }
    modifier = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    envoyerClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.remplacer(this.state);
    }
    render(){
        const {id, marque, modele, pays, image} = this.state;
        return(
            <Fragment>
          
            <div className="text-right">
            
            {/* <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editModal">
            <i className="fa fa-plus"></i>
            Ajouter
            </button> */}
            </div>
                                
            <div className="modal" id="editModal">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Editer une voiture</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
            <form>
               <div className="form-group ">
                     <label htmlFor="id">Id</label>
                     <input type="text" readOnly className="form-control" id="id" name="id" value={id} placeholder="Entrez la marque" onChange={this.modifier}/>
                </div>
                <div className="form-group ">
                     <label htmlFor="marque">Marque</label>
                     <input type="text" className="form-control" id="marque" name="marque" value={marque} placeholder="Entrez la marque" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="modele">Modèle</label>
                     <input type="text" className="form-control" id="modele" name="modele" value={modele} placeholder="Entrez le modèle" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="pays">Pays</label>
                     <input type="text" className="form-control" id="pays" name="pays" value={pays} placeholder="Entrez le pays" onChange={this.modifier}/>
                </div>
               
                <div className="form-group ">
                     <label htmlFor="image">Image</label>
                     <input type="text" className="form-control" id="image" name="image" value={image} placeholder="Selectionner l'image" onChange={this.modifier}/>
                </div>
               
               <button type="button" className="btn btn-warning btn-block" 
               onClick={this.envoyerClick} data-dismiss="modal">Modifier</button>
            </form>
            </div>
            <div className="modal-footer">
            {/* <button type="button" className="btn btn-primary" data-dismiss="modal"></button> */}
                        </div>

                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default Edit;