import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { decrement, deleteItem, increment, resetCart } from './Redux/CartSlice';

function Cart() {
    // const [toggle, setToggle] = useState(false);
    const navi = useNavigate();
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const itemsInCart = useSelector((state) => state.cart.itemsInCart);
    console.log(itemsInCart.length);
    // itemsInCart.length > 0 ? setToggle(false) : "";
    // console.log("len:", len);
    // const [alertShown, setAlertShown] = useState(false);
    const handleIncrement = (item) => {
        dispatch(increment(item));
    }
    const handleDecrement = (item) => {
        dispatch(decrement(item))
    }
    const handleDelete = (item) => {
        dispatch(deleteItem(item));
    }
    const buynow = () => {
        alert("Order Placed Successfully!")
        dispatch(resetCart());
    }
    useEffect(() => {
        if (token) {
            axios.get("http://localhost:4500/apis/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth https://ecommerce-ns6o.onrender.com/apis/auth
                .then((res) => {
                    console.log(res.data);
                })
                .catch(err => console.log(err))
        }
        else {
            alert("Please login to view cart page!");
            navi("/login");
        }
    }, [token, navi])
    return (
        <div>
            <h1>My Cart Page</h1>
            {itemsInCart.length > 0 ? (
                <div className='maincart'>
                    <div className='procartmain'>
                        {itemsInCart.map((item, index) => {
                            return (
                                <div className='productscart' key={index}>
                                    <div className='cartimgdiv'>
                                        <img className="imgfil" src={item.image} alt='not found' />
                                    </div>
                                    <div className='cartiteminfodiv'>
                                        <h2>{item.pname}</h2>
                                        <h4>Rs. {item.offerPrice}</h4>
                                        <button onClick={() => handleDecrement(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleIncrement(item)}>+</button>
                                        <button className='removecartbut' onClick={() => handleDelete(item)}>Remove</button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className='totalamtdiv'>
                        <div className='amtdiv'>
                            <h3>Total Products Added - {itemsInCart.length}</h3>
                            <h2>Total Amount - Rs. {itemsInCart.reduce((total, item) => total + item.offerPrice * item.quantity, 0)}</h2>
                            <button onClick={buynow}>Buy Now</button>
                        </div>
                    </div>
                </div>
            ) :
                <div>
                    <h1>No items in cart</h1>
                    <div className='cartimgdiv'>
                        <img src='https://yamikart.in/public/images/empty-cart.png' className='imgfil' alt='not found' />
                    </div>
                </div>}

        </div>
    )
}

export default Cart