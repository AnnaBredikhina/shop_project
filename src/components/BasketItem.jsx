import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
    const { id, title, price, quantity } = props;

    const { removeFromBasket, incrementQuantity, decrementQuantity } = useContext(ShopContext);

    return <li className="collection-item basket-item">
        {title}
        <i className="material-icons purple-text item-action" onClick={() => decrementQuantity(id)}>remove</i>
        x{quantity}
        <i className="material-icons purple-text item-action" onClick={() => incrementQuantity(id)}>add</i>
        <span className="item-price">= {(price * quantity).toFixed(2)}</span> $

        <span className="secondary-content" onClick={() => removeFromBasket(id)}>
            <i className="material-icons purple-text">close</i>
        </span>
    </li>;
}

export { BasketItem };