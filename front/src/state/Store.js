import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import orderReducer from "./Order/Reducer";
import { paymentReducer } from "./payment/Reducer";
import { adminOrderReducer } from "./Admin/Order/Reducer";
import { adminCustomer } from "./Admin/Customer/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    products: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
    payment: paymentReducer,
    admin: adminOrderReducer,
    adminCustomer: adminCustomer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))