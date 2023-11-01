import './assets/scss/all.scss'

import Navbar from './components/Navbar'
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {

    return (
        <div className="App">
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
        </div>
    );
}

export default App;
