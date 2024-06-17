import { API_URL } from "../config";
import { useEffect, useContext } from "react";

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Main() {
    const { loading, isBasketShow, alertName, setGoods } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL)
            .then(response => response.json()) // преобразовать ответ в json
            .then(data => {
                setGoods(data);
            })
        // eslint-disable-next-line
    }, [])

    return <main className="container content">
        <Cart />
        {loading ? <Preloader /> : <GoodsList />}
        {isBasketShow ? <BasketList /> : null}
        {alertName ? <Alert /> : null}
    </main>
}

export { Main };