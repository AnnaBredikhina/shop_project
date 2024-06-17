import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
    const { order, handleBasketShow } = useContext(ShopContext);

    const quantity = order.length;

    return <div className="cart yellow lighten-2" onClick={handleBasketShow}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span>{quantity}</span> : null}
    </div>
}

export { Cart };