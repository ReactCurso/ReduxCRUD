import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>CRUD</h1>
        <a href="/products/nuevo">Agregar Producto</a>
      </div>
    </nav>
  );
};

export default Header;