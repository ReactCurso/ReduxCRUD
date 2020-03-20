import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_OK,
  AGREGAR_PRODUCTO_ERR
} from "../types";

//cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    case AGREGAR_PRODUCTO_ERR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
