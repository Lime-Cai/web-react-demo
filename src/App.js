import './assets/scss/all.scss'

import Navbar from './components/Navbar'
import Product from "./components/Product";
import Cart from "./components/Cart";

import {CartContext} from "./store";
import {useReducer} from "react";

function App() {
    const cartReducer = useReducer((prevState, action) => {
        switch (action) {
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
