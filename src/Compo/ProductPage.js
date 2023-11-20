import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { storeData } from '../DataStore/DataStore';
import Footer from './Footer';
import CartButton from '../Cart/CartButton';

function ProductPage() {
    const ids = useParams().id;
    var pid = parseInt(ids);
    const [datas] = useContext(storeData);
    const selectedProduct = datas.filter((item) => item.id === pid);
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
                            <CartButton item={item} />
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}

export default ProductPage