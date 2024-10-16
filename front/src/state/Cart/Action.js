import { api } from "../../config/Api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const { data } = await api.put("/api/cart/put", reqData)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        console.log("add item to cart {cart_action} ", data);
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}


export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
        await api.delete(`/api/cart_Items/${cartItemId}`);
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
        dispatch(getCart());  // Refetch the cart after successful deletion
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
    }
};


export const updateCartItem = (payload) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    try {
        // Update API call to handle both data and cartItemId
        const { CartItemId, data } = payload; // Destructure the payload
        const response = await api.put(`/api/cart_Items/${CartItemId}`, data); // Pass data to the API call
        console.log("id", CartItemId)
        console.log("Updated cart item:", response.data);
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
    }
};


export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })
    try {
        const { data } = await api.get(`/api/cart/`)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
        console.log("get cart data {cart_action}", data);
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}
