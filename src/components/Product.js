import productsData from "../assets/productsData";

export default function Product() {

    return (
        <div className="row row-cols-3 g-3 ">
            {productsData.map(( product )=>{
                return(
                    <div className="col" key={product.id}>
                        <div className="card">
                            <img
                                src={product.img}
                                className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">
                                    <span className='float-start'>
                                        {product.title}
                                    </span>
                                    <span className='float-end'>
                                        NT$ {product.price}
                                    </span>
                                </h6>
                                <button type='type' className="btn btn-outline-primary w-100 mt-2">
                                    加入購物車
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}