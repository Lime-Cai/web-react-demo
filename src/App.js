import {useEffect, useState} from 'react';
import axios from 'axios';


import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss'

function App() {

    return (
        <div className="App">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand">甜點蛋糕店</span>
                    <button className="btn btn-outline-dark position-relative" type="submit">
                        購物車
                        <span
                            className="badge text-bg-danger position-absolute top-0 start-100 translate-middle">99</span>
                    </button>

                </div>
            </nav>
            <div className="container mt-4">
                {/* 外層格線 */}
                <div className="row">
                    {/* 加起來一定會是12 */}
                    <div className="col-md-7">
                        {/* 內層格線 */}
                        <div className="row row-cols-3 g-2 ">
                            <div className="col">
                                <div className="card">
                                    <img
                                        src="https://images.unsplash.com/photo-1698620943272-59963ac1070f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            <span className='float-start'>全素食健康餐</span>
                                            <span className='float-end'>NT$ 220</span>
                                        </h6>
                                        <button type='type' className="btn btn-outline-primary w-100 mt-2">
                                            加入購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        src="https://images.unsplash.com/photo-1698688334089-c68105801d02?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            <span className='float-start'>全素食健康餐</span>
                                            <span className='float-end'>NT$ 220</span>
                                        </h6>
                                        <button type='type' className="btn btn-outline-primary w-100 mt-2">
                                            加入購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        src="https://images.unsplash.com/photo-1698620943272-59963ac1070f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            <span className='float-start'>全素食健康餐</span>
                                            <span className='float-end'>NT$ 220</span>
                                        </h6>
                                        <button type='type' className="btn btn-outline-primary w-100 mt-2">
                                            加入購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        src="https://images.unsplash.com/photo-1698620943272-59963ac1070f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            <span className='float-start'>全素食健康餐</span>
                                            <span className='float-end'>NT$ 220</span>
                                        </h6>
                                        <button type='type' className="btn btn-outline-primary w-100 mt-2">
                                            加入購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="bg-light p-3">
                            <table className='table align-middle'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="#">x</a>
                                        </td>
                                        <td>
                                            <img src="https://images.unsplash.com/photo-1698620943272-59963ac1070f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
