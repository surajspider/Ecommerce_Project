import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { storeData } from '../DataStore/DataStore';
import Footer from './Footer';

function ProductPage() {
    const ids = useParams().id;
    var pid = parseInt(ids);
    const navi = useNavigate();
    const [datas] = useContext(storeData);
    const selectedProduct = datas.filter((item) => item.id === pid);
    const addtocartfun = (event) => {
        event.preventDefault();
        navi("/cart");
    }
    return (
        <div>
            {selectedProduct.map((item, index) => {
                return (
                    <div className='productdiv' key={index}>
                        <div className='product_imagediv'>
                            <img className="imgfil" src={item.image} alt="not found" />
                        </div>
                        <div className='product_contentdiv'>
                            <h2>{item.pname}</h2>
                            <h3>Product Features:</h3>
                            <ul>
                                <li>{item.descript1}</li>
                                <li>{item.descript2}</li>
                                <li>{item.descript3}</li>
                                <li>{item.descript4}</li>
                                <li>{item.descript5}</li>
                            </ul>
                            <button className='cartbut_productpage' onClick={(event) => addtocartfun(event)}>Add to cart</button>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}

export default ProductPage