import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Producto from "./components/productos/Productos";
import NuevoProducto from "./components/productos/NuevoProducto";
import EditarProducto from "./components/productos/EditarProducto";
function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Producto}/>
          <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          <Route exact path="/productos/nuevo" component={NuevoProducto}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
