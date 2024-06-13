import { API_URL } from "../config";
import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        // проверка: был ли уже добавлен товар
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)    // возвращает -1 или индекс элемента

        // добавляем единичку в количество и товар в корзину
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem]);
        } else {        // если был добавлен - ищем товар
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.title); // 
    }

    const removeFromBasket = (id) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const addQuantity = (id) => {
        const newOrder = order.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity,
                }
            } else {
                return item;
            }
        })
        setOrder(newOrder);
    }

    const removeQuantity = (id) => {
        const newOrder = order.map(item => {
            if (item.id === id && item.quantity > 0) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity,
                }
            } else {
                return item;
            }
        })
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL)
            .then(response => response.json()) // преобразовать ответ в json
            .then(data => {
                setGoods(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, [])

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {
            loading ? <Preloader /> : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )
        }
        {
            isBasketShow ? <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
            /> : null
        }
        {
            alertName ? <Alert title={alertName} closeAlert={closeAlert} /> : null
        }
    </main>
}

export { Main };