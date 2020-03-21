import React, { Fragment, useEffect } from "react";
import {
  obtenerProductos,
  eliminarProducto,
  seleccionarProducto
} from "../../actions/productoAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
const Producto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cargando = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);
  const productos = useSelector(state => state.productos.productos);

  useEffect(() => {
    dispatch(obtenerProductos());
    // eslint-disable-next-line
  }, []);

  const eliminar = id => {
    Swal.fire({
      title: "Desea eliminar el producto?",
      text: "No podra revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then(result => {
      if (result.value) {
        dispatch(eliminarProducto(id));
      }
    });
  };

  const redireccionarEdicion = producto => {
    dispatch(seleccionarProducto(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Error
        </p>
      ) : null}
      {cargando ? <p className="text-center">cargando...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr id="0">
              <td>"No hay productos"</td>
            </tr>
          ) : (
            productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>
                  <span className="font-weight-bold">${producto.precio}</span>
                </td>
                <td className="acciones">
                  <button
                    type="button"
                    onClick={() => redireccionarEdicion(producto)}
                    className="btn btn-primary mr-2"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminar(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Producto;
