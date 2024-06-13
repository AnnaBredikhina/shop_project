import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    return <div className="goods">
        {
            goods.length ? goods.map(item => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
            )) : <h4>Nothing here</h4>
        }
    </div>
}

export { GoodsList };