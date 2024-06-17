import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.handleBasketShow = () => {
        dispatch({ type: 'BASKET_SHOW' })
    }

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD', payload: item })
    }

    value.incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT', payload: { id: id } })
    }

    value.decrementQuantity = (id) => {
        dispatch({ type: 'DECREMENT', payload: { id: id } })
    }

    value.removeFromBasket = (id) => {
        dispatch({ type: 'REMOVE', payload: { id: id } })
    }

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data })
    }

    return <ShopContext.Provider value={value} >
        {children}
    </ShopContext.Provider>
}