import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
import { fireProducts } from '../ucommerce-products'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
    const [products, setProducts] = useState([]);
    const { cartItems } = useSelector((state) => state.cartReducer)
    const [loading, setLoading] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const [filterType, setFilterType] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            setLoading(true);
            const users = await getDocs(collection(fireDB, "products"))
            const productsArray = [];
            users.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }

                productsArray.push(obj)
                setLoading(false);
            });

            setProducts(productsArray)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product })
    }
    return (
        <Layout loading={loading}>
            <div className="container">
                <div className="d-flex w-50">
                    <input
                        type="text"
                        className="form-control mx-2"
                        placeholder="Search Items"
                        value={searchKey}
                        onChange={(e) => { setSearchKey(e.target.value) }}
                    />
                    <select className="form-control mt-3"
                        value={filterType}
                        onChange={(e) => { setFilterType(e.target.value) }}>
                        <option value="">All</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="jewelery">jewelery</option>
                        <option value="electronics">electronics</option>
                        <option value="women's clothing">women's clothing</option>
                    </select>
                </div>
                <div className="row">
                    {products
                        .filter((obj) => obj.title.toLowerCase().includes(searchKey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .map((product) => {
                            return <div className="col-md-4">
                                <div className="m-2 p-1 product position-relative">
                                    <div className="product-content">
                                        <p>{product.title}</p>
                                        <div className="text-center">
                                            <img src={product.image} alt="" className="product-img" />
                                        </div>
                                    </div>
                                    <div className="product-actions">
                                        <h2>{product.price} Tk</h2>
                                        <div className="d-flex">
                                            <button className="mx-2" onClick={() => addToCart(product)}>ADD TO CART</button>
                                            <button onClick={() => {
                                                navigate(`/productinfo/${product.id}`)
                                            }}>VIEW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                </div>
            </div>
        </Layout>
    )
}

export default HomePage;
