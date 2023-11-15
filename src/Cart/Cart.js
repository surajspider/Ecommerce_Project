import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navi = useNavigate();
    const token = localStorage.getItem("token");
    // const [alertShown, setAlertShown] = useState(false);
    useEffect(() => {
        if (token) {
            axios.get("https://ecommerce-ns6o.onrender.com/apis/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth https://ecommerce-ns6o.onrender.com/apis/auth
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
            <div className='maincart'>
                <div className='procartmain'>
                    <div className='productscart'>
                        <div className='cartimgdiv'>
                            <img className="imgfil" src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958176452' alt='not found' />
                        </div>
                        <div className='cartiteminfodiv'>
                            <h2>Iphone 13 Mini</h2>
                            <h4>Rs. 23000</h4>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                            <button className='removecartbut'>Remove</button>
                        </div>
                    </div>
                    <div className='productscart'>
                        <div className='cartimgdiv'>
                            <img className="imgfil" src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958176452' alt='not found' />
                        </div>
                        <div className='cartiteminfodiv'>
                            <h2>Iphone 13 Mini</h2>
                            <h4>Rs. 23000</h4>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                            <button className='removecartbut'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className='totalamtdiv'>
                    <div className='amtdiv'>
                        <h3>Total Products Added - 5</h3>
                        <h2>Total Amount - Rs. 45000</h2>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart