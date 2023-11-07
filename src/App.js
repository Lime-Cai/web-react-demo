import './assets/scss/all.scss'

import Navbar from './components/Navbar'
import Product from "./components/Product";
import Cart from "./components/Cart";

import {CartContext} from "./store";
import {useReducer} from "react";

function App() {
    const cartReducer = useReducer((prevState, action) => {
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
                    ...prevState, carList
                };
            case 'CHANGE_CART_QUANTITY':
                carList[index].quantity = action.payload.quantity;
                return {
                    ...prevState, carList
                }
            default:
                return prevState
        }
    }, {
        carList: [],
    })
    return (
        <CartContext.Provider value={cartReducer}>
            <Navbar/>
            <div className="container mt-4">
                {/* 外層格線 */}
                <div className="row">
                    {/* 加起來一定會是12 */}
                    <div className="col-md-7">
                        {/* 內層格線 */}
                        <Product/>
                    </div>
                    <div className="col-md-5">
                        <Cart/>
                    </div>
                </div>
            </div>
        </CartContext.Provider>
    );
}

export default App;
