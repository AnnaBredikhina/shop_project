export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }
        case 'ADD':
            {
                const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);

                let newOrder = null;
                if (itemIndex < 0) {
                    const newItem = {
                        ...payload,
                        quantity: 1,
                    }
                    newOrder = [...state.order, newItem]
                } else {
                    newOrder = state.order.map((orderItem, index) => {
                        if (index === itemIndex) {
                            return {
                                ...orderItem,
                                quantity: orderItem.quantity + 1
                            }
                        } else {
                            return orderItem;
                        }
                    })
                }
                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.title
                }
            }
        case 'INCREMENT':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity + 1;
                        return {
                            ...item,
                            quantity: newQuantity,
                        }
                    } else {
                        return item;
                    }
                })
            }
        case 'DECREMENT':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id && item.quantity > 0) {
                        const newQuantity = item.quantity - 1;
                        return {
                            ...item,
                            quantity: newQuantity,
                        }
                    } else {
                        return item;
                    }
                })
            }
        case 'BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'REMOVE':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        default:
            return state;
    }
}