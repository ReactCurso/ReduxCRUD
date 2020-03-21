import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_OK,
  AGREGAR_PRODUCTO_ERR,
  OBTENER_PRODUCTO_CARGANDO,
  OBTENER_PRODUCTO_OK,
  OBTENER_PRODUCTO_ERR,
  SELECCIONAR_PRODUCTO,
  ELIMINAR_PRODUCTO_OK,
  ELIMINAR_PRODUCTO_ERR,
  EDITAR_PRODUCTO_OK,
  EDITAR_PRODUCTO_ERR
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export const crearNuevoProducto = producto => {
  return async dispatch => {
    dispatch({ type: AGREGAR_PRODUCTO });
    await axiosClient
      .post("/productos", producto)
      .then(() => {
        dispatch({ type: AGREGAR_PRODUCTO_OK, payload: producto });
        Swal.fire("Exito", "Producto agregado", "success");
      })
      .catch(() => {
        dispatch({ type: AGREGAR_PRODUCTO_ERR });
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error, vuelve a intentarlo"
        });
      });
  };
};

export const obtenerProductos = () => {
  return async dispatch => {
    dispatch({ type: OBTENER_PRODUCTO_CARGANDO });
    await axiosClient
      .get("/productos")
      .then(Response => {
        dispatch({ type: OBTENER_PRODUCTO_OK, payload: Response.data });
      })
      .catch(() => dispatch({ type: OBTENER_PRODUCTO_ERR }));
  };
};

export const eliminarProducto = id => {
  return async dispatch => {
    await axiosClient
      .delete(`/productos/${id}`)
      .then(Response => {
        Swal.fire(
          "Producto eliminado!",
          "el producto se elimino con exito.",
          "success"
        );
        dispatch({ type: ELIMINAR_PRODUCTO_OK, payload: id });
      })
      .catch(() => dispatch({ type: ELIMINAR_PRODUCTO_ERR }));
  };
};

export const editarProducto = producto => {
  return async dispatch => {
    await axiosClient
      .put(`/productos/${producto.id}`,producto)
      .then(Response => {
        dispatch({ type: EDITAR_PRODUCTO_OK, payload: producto });
      })
      .catch(() => dispatch({ type: EDITAR_PRODUCTO_ERR }));
  };
};

export const seleccionarProducto = producto => {
  return async dispatch =>
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: producto
    });
};
