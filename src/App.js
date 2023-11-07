import './assets/scss/all.scss'

import Navbar from './components/Navbar'
import Product from "./components/Product";
import Cart from "./components/Cart";

import {CartContext, cartReducer, cartInit} from "./store";
import {useReducer} from "react";

function App() {
    const reducer = useReducer(cartReducer, cartInit);
    return (
        <CartContext.Provider value={reducer}>
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
