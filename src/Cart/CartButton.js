import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtocart } from './Redux/CartSlice';

function CartButton({ item }) {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const addtocartfun = (e) => {
        e.preventDefault();
        if (token) {
            axios.get("https://ecommerce-ns6o.onrender.com/apis/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth https://ecommerce-ns6o.onrender.com/apis/auth
                .then((res) => {
                    console.log(res.data);
                    console.log("item:", item);
                    dispatch(addtocart(item));
                })
                .catch(err => console.log(err))
        }
        else {
            alert("Please login to view cart page!");
            navi("/login");
        }
    }
    return (
        <div>
            <button className='cartbutton' onClick={(event) => addtocartfun(event)}>Add to cart</button>
        </div>
    )
}

export default CartButton