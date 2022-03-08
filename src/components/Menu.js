import React from 'react';
import { BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Admin from './Admin';
import Edit from './Edit';
import Ajout from './Ajout';
import Page4O4 from './Page404';

const Menu = () => {
    return (
        <Router>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-secondary">
        <Link className="navbar-brand"to="/" >C&V </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/"><i className="fa fa-home"></i> Accueil <span className="sr-only">(current)</span></Link>
            </li>
            </ul>
            <span className="navbar-text">
            <Link name="ideas" to="/admin123"><i className="fa fa-cogs" ></i> Adminstration</Link>
            </span>
        </div>
        </nav>
       <Switch>
           <Route exact path="/">
               <Accueil />
           </Route>
           <Route path="/admin123">
                <Admin />
           </Route> 
           <Route path="/edit" component = {Ajout}/>
              
           <Route path="*">
                <Page4O4 />
           </Route>
       </Switch>
    </Router>
      );
}
 
export default Menu;