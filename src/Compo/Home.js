import React, { useContext } from 'react'
import ImageCarousel from './ImageCarousel'
import Footer from './Footer';
import { storeData } from '../DataStore/DataStore';
import { Link } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
const image1 = require("../Images/corousel_1.png");
const image2 = require("../Images/corousel_2.png");
const image3 = require("../Images/corousel_3.png");

function Home() {
    const [datas] = useContext(storeData);
    // const navi = useNavigate();
    console.log(datas);
    const shuffledDatas = datas.filter((item) => item.id % 12 === 0)
    const selecteddatas = shuffledDatas.slice(0, 8);
    const images = [
        image1,
        image2,
        image3
    ]
    // const addtocartfun = (event) => {
    //     navi("/cart");
    //     event.preventDefault();
    // }
    return (
        <div>
            <ImageCarousel images={images} />
            <div>
                <h2 className='dynamictopic'>Best Seller</h2>
                <div className='home_itemsparent'>
                    {selecteddatas.map((item, index) => {
                        return (
                            <div className='home_itemdiv' key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${item.id}`}>
                                    <div className='home_imgdiv'>
                                        <img className='imgfil' src={item.image} alt='notfound' />
                                    </div>
                                    <div className='home_contentdiv'>
                                        <h4 className='pname'>{item.pname}</h4>
                                        <h4 className='price'><span className='strike'>Rs. {item.originalPrice}</span> Rs. {item.offerPrice}</h4>
                                    </div>
                                    <CartButton item={item} />
                                </Link>
                            </div>
                        )
                    })}
                </div>

            </div>
            <hr />
            <Footer />
        </div>
    )
}

export default Home