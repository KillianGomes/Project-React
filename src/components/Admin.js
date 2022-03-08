import React, {Component, Fragment}  from 'react';
import Liste from './Liste';
import Ajout from './Ajout';
import Edit from './Edit';

class Admin extends Component {
    state = { 
        datas:[
            {id:1, marque:'Peugeot', modele:'208', pays:'France', image:'208.jpg'},
            {id:2, marque:'Renault', modele:'Clio4', pays:'France', image:'clio4.jpg'},
            {id:3, marque:'Tesla', modele:'X', pays:'Usa', image:'x.jpg'},
            {id:4, marque:'Bmw', modele:'M5', pays:'Allemagne', image:'m5.jpg'},
        ],
        indexMod : -1,
        voitureMod: {id:-1, marque:'', modele:'', pays:'', image:''}
     }
     componentDidMount =()=>{
         let tabVoiture = JSON.parse(localStorage.getItem('datas'));
         if(!tabVoiture || tabVoiture.length === 0){
             let voitures1 = localStorage.setItem('datas',JSON.stringify(this.state.datas));
             console.log(voitures1);
             this.setState({datas:voitures1}, function(){

                 console.log(this.state.datas);
             });
         }else{
             let voitures2 = JSON.parse(localStorage.getItem('datas')); 
                 this.setState({datas:voitures2});
         }
         
     }
    removeVoiture = (index)=>{
        console.log(index);
       const {datas} = this.state
       this.setState({
        datas: datas.filter((d, i) =>{
            return i!==index
        })
        }, function(){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        })
     }
     itemVoiture = (id)=>{
        console.log(id);
        const cars = [...this.state.datas]; 
        this.setState({voitureMod:cars[id], indexMod: id});
     }

     addVoiture = (newVoiture) => {
         if(this.state.datas.length !== 0){

             newVoiture.id = (this.state.datas[this.state.datas.length - 1].id + 1)
         }
        this.setState({datas: [...this.state.datas, newVoiture]},function(){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        })
     }

     updateVoiture = (carMod) =>{
        const cars = [...this.state.datas]; 
        cars[this.state.indexMod] = {...carMod};
        this.setState({datas: cars}, function(){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        });
     }
     
    render() { 
        console.log(this.state.voitureMod);
        return (
            <Fragment>
             <h1 className="bg-secondary text-white text-center">Administration</h1> 
             <Ajout ajouter = {this.addVoiture} />
             
             <Edit sharedCar = {this.state.voitureMod} remplacer = {this.updateVoiture} />
             <Liste editVoiture = {this.itemVoiture} deleteVoiture = {this.removeVoiture} voitures = {this.state.datas} />
             </Fragment>
             );
    }
}
 
export default Admin;