import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_OK,
  AGREGAR_PRODUCTO_ERR
} from "../types";
import axiosClient from "../config/axios";

export const crearNuevoProducto = producto => {
  return async dispatch => {
    dispatch({ type: AGREGAR_PRODUCTO });
    try {
      await axiosClient.post("/productos", producto);
      dispatch({ type: AGREGAR_PRODUCTO_OK, payload: producto });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: AGREGAR_PRODUCTO_ERR });
    }
  };
};
