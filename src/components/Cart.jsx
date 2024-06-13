function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;

    return <div className="cart yellow lighten-2" onClick={handleBasketShow}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span>{quantity}</span> : null}
    </div>
}

export {Cart};