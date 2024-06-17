import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {

    const { alertName, closeAlert } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)
    
        return () => {
            clearTimeout(timerId);
        }
        // eslint-disable-next-line
    }, [alertName])

    return <div className="toast-container">
        <div className="toast">{alertName} was added to the Cart</div>
    </div>
}

export {Alert};