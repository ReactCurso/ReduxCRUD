import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProducto } from "../../actions/productoAction";
import { useHistory } from "react-router-dom";

const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editar = producto => dispatch(editarProducto(producto));
  const productoOriginal = useSelector(
    state => state.productos.productoSeleccionado
  );

  const onSubmit = e => {
    e.preventDefault();
    editar(producto);
    history.push("/");
  };

  const onChange = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const [producto, setProducto] = useState({
    nombre: "",
    precio: 0
  });

  useEffect(() => {
    setProducto(productoOriginal);
    console.log(productoOriginal);
  }, [productoOriginal]);

  return !producto ? null : (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-a font-weight-bold">
              Editar producto
            </h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={producto.nombre}
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
                  value={producto.precio}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
