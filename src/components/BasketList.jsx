import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        addQuantity = Function.prototype,
        removeQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return <ul class="collection basket-list">
        <li className="collection-item active purple lighten-2 black-text text-big">Shopping cart
            <span class="secondary-content" onClick={handleBasketShow}>
                <i class="material-icons">close</i>
            </span>
        </li>
        {
            order.length ? order.map(item => (
                <BasketItem
                    key={item.id}
                    {...item}
                    removeFromBasket={removeFromBasket}
                    addQuantity={addQuantity}
                    removeQuantity={removeQuantity}
                />
            )) : <li className="collection-item">Cart is empty</li>
        }
        <li className="collection-item active purple lighten-4 black-text text-big">Total price: {totalPrice} $</li>
        <li className="collection-item">
            <button className="btn waves-effect waves-light purple lighten-2 black-text">Order</button>
        </li>
    </ul>
}

export {BasketList};