import { useContext } from "react";
import { ShopContext } from "../context";

import { BasketItem } from "./BasketItem";

function BasketList() {

    const { order = [], handleBasketShow } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return <ul className="collection basket-list">
        <li className="collection-item active purple lighten-2 black-text text-big">Shopping cart
            <span className="secondary-content" onClick={handleBasketShow}>
                <i className="material-icons">close</i>
            </span>
        </li>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} {...item} />
            )) : <li className="collection-item">Cart is empty</li>
        }
        <li className="collection-item active purple lighten-4 black-text text-big">Total price: {totalPrice.toFixed(2)} $</li>
        <li className="collection-item">
            <button className="btn waves-effect waves-light purple lighten-2 black-text">Order</button>
        </li>
    </ul>
}

export { BasketList };