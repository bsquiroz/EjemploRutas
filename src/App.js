import './App.css';
import { 
  HashRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Pokemon from './components/Pokemon';
import PokemonMas from './components/PokemonMas';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/"  className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/trabajos" className="btn btn-dark">
            Trabajos
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
        </div>
        <Switch>
          <Route path="/trabajos/:id/:name">
            <PokemonMas />
          </Route>
          <Route path="/trabajos/:id">
            <Pokemon />
          </Route>
          <Route path="/trabajos">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
