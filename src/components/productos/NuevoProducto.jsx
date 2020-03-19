import React, {useState} from "react";

const NuevoProducto = () => {
  const onSubmit = e => {
    e.preventDefault();
  };
  const onChange = e=> {
      setProducto({
          ...producto,
          [e.target.name] : e.target.value
      })
  }
  const [producto, setProducto] = useState({
      nombre: '',
      precio: 0
  })
  const {nombre, precio} = producto;
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-a font-weight-bold">
              Agregar nuevo prouducto
            </h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChange}
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Agrear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
