import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
    const {
        id,
        title,
        price,
        description,
        image
    } = props;

    const { addToBasket } = useContext(ShopContext);

    return <div className="card">
        <div className="card-image">
            <img alt={title} src={image} />
        </div>
        <div className="card-content">
            {
                (title.length > 38) ? (
                    <span className="card-title">{title.substring(0, 38) + "..."}</span>
                ) : <span className="card-title">{title}</span>
            }

            {
                (description.length > 70) ? (
                    <p>{description.substring(0, 70) + "..."}</p>
                ) : <p>{description}</p>
            }
        </div>
        <div className="card-action">
            <button
                className="btn waves-effect waves-light yellow lighten-2"
                onClick={() => addToBasket({
                    id,
                    title,
                    price,
                })}>Buy</button>
            <span className="right">{price} $</span>
        </div>
    </div>
}

export { GoodsItem };