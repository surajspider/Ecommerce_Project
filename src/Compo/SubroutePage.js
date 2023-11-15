import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { storeData } from '../DataStore/DataStore';

function SubroutePage() {
    const [datas] = useContext(storeData);
    console.log(datas);
    const navi = useNavigate();
    const name = useParams().name;
    console.log(name);
    const filtereddatas = datas.filter(item => {
        if (item.category === name && item.brand === "apple") {
            return true;
        }
        else if (item.category === name) {
            return true;
        } else if (item.category === "mobile" && item.brand === name) {
            return true;
        } else if (item.category === "laptop" && item.brand === name) {
            return true;
        } else if (item.brand === "apple" && item.model === name) {
            return true;
        }
        else if (item.category === "watch" && item.brand === name) {
            return true;
        }
        else {
            return false;
        }
    });
    console.log(filtereddatas);
    const divisibleby4 = Math.floor(filtereddatas.length / 4) * 4;
    const selectedDatas = filtereddatas.slice(0, divisibleby4);
    const addtocartfun = (event) => {
        navi("/cart");
        event.preventDefault();
    }
    return (
        <div>
            <h1 className='dynamictopic'>{name}</h1>
            <div className='home_itemsparent'>
                {selectedDatas.map((item, index) => {
                    return (
                        <div className='home_itemdiv' key={index}>
                            <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${item.id}`}>
                                <div className='home_imgdiv'>
                                    <img className='imgfil' src={item.image} alt='notfound' />
                                </div>
                                <div className='home_contentdiv'>
                                    <h4 className='pname'>{item.pname}</h4>
                                    <h4 className='price'><span className='strike'>Rs. {item.originalPrice}</span> Rs. {item.offerPrice}</h4>
                                    <button className='cartbutton' onClick={(event) => addtocartfun(event)}>Add to cart</button>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubroutePage