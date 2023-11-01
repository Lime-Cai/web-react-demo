export default function Cart(){
    return(
        <div className="bg-light p-3">
            <table className='table align-middle'>
                <tbody>
                <tr>
                    <td>
                        <a href="#">x</a>
                    </td>
                    <td>
                        <img
                            src="https://images.unsplash.com/photo-1698620943272-59963ac1070f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
                            className='table-image'
                            alt=""/>
                    </td>
                    <td>
                        素食餐
                        <br/>
                        <small className="text-muted">NT$ 220</small>
                    </td>
                    <td>
                        <select name="" id="" className="form-select"></select>
                    </td>
                    <td className='text-end'>
                        NT$ 440
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={5} className='text-end'>
                        總金額 NT$ 440
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}