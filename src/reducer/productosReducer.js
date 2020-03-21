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

//cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoSeleccionado: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTO_CARGANDO:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: true
      };
    case AGREGAR_PRODUCTO_OK:
      return {
        ...state,
        loading: false,
        error: false,
        productos: [...state.productos, action.payload]
      };
    case EDITAR_PRODUCTO_ERR:
    case ELIMINAR_PRODUCTO_ERR:
    case OBTENER_PRODUCTO_ERR:
    case AGREGAR_PRODUCTO_ERR:
      return {
        ...state,
        loading: false,
        error: true,
        productoSeleccionado: null
      };
    case OBTENER_PRODUCTO_OK:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: false
      };
    case ELIMINAR_PRODUCTO_OK:
      return {
        ...state,
        productos: state.productos.filter(p => p.id !== action.payload)
      };
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        productoSeleccionado: action.payload
      };
    case EDITAR_PRODUCTO_OK:
      return {
        ...state,
        productoSeleccionado: null,
        producto: state.productos.map(p=> p.id === action.payload.id ? p = action.payload: p)
      };

    default:
      return state;
  }
};
