function BasketItem(props) {
    const {
        id,
        title,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        addQuantity = Function.prototype,
        removeQuantity = Function.prototype
    } = props;

    return <li className="collection-item basket-item">
        {title}
        <i class="material-icons purple-text item-action" onClick={() => removeQuantity(id)}>remove</i>
        x{quantity}
        <i class="material-icons purple-text item-action" onClick={() => addQuantity(id)}>add</i>
        <span className="item-price">= {(price * quantity).toFixed(2)}</span> $

        <span class="secondary-content" onClick={() => removeFromBasket(id)}>
            <i class="material-icons purple-text">close</i>
        </span>
    </li>;
}

export {BasketItem};