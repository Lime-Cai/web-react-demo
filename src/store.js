import {createContext} from "react";

export const cartInit = {
    carList: []
}
export const cartReducer = (prevState, action) => {
    const carList = [...prevState.carList];
    // 取得當前購物車目標品項的索引
    const index = carList.findIndex((item) => item.id === action.payload.id)
    switch (action.type) {
        case 'ADD_TO_CART':
            if (index === -1) {
                // 還未加入到購物車內
                carList.push(action.payload);
            } else {
                // 當前購物車的項目和加入的項目一致
                carList[index].quantity += action.payload.quantity;
            }
            return {
                ...prevState, carList, total:calculateTotalPrice(carList)
            };
        case 'CHANGE_CART_QUANTITY':
            carList[index].quantity = action.payload.quantity;
            return {
                ...prevState, carList, total:calculateTotalPrice(carList)
            }
        case 'REMOVE_CART_ITEM':
            carList.splice(index, 1);
            return {
                ...prevState, carList, total:calculateTotalPrice(carList)
            }
        default:
            return prevState
    }
}

function calculateTotalPrice(carList){
    return(
        carList.map((item) => {
            return item.quantity * item.price
        }).reduce((a,b)=>{
            return a + b;
        }, 0)
    )
}
export const CartContext = createContext({})