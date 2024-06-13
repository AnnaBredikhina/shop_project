import { useEffect } from "react";

function Alert(props) {
    const { title, closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000) // вызов функции через 3 сек после отображения окна
    
        return () => {
            clearTimeout(timerId);
        }
        // eslint-disable-next-line
    }, [title])

    return <div className="toast-container">
        <div className="toast">{title} was added to the Cart</div>
    </div>
}

export {Alert};