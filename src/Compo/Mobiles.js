import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { storeData } from '../DataStore/DataStore';
import Footer from './Footer';

function Mobiles() {
    const [datas] = useContext(storeData);
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filtereddatas = datas.filter(item => item.category === "mobile");
    const selecteddatas = filtereddatas.slice(startIndex, endIndex)
    console.log(filtereddatas);
    const isLastPage = endIndex >= filtereddatas.length;
    console.log("endindex", endIndex)
    console.log("data length:", filtereddatas.length)
    console.log("filtereddata", filtereddatas.length)
    // const shuffledDatas = [...filtereddatas].sort(() => Math.random() - 0.5);
    // const selectedDatas = shuffledDatas.slice(0, 8);
    const navi = useNavigate();
    const addtocartfun = (event) => {
        navi("/cart");
        event.preventDefault();
    }
    const handleNextPage = () => {
        if (endIndex < datas.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };
    const sam = ["samsung", "redmi", "oneplus", "realme", "iqoo", "case", "charger"];
    return (
        <div>
            <div className='mobile_parentdiv'>
                <div className='mobile_routediv'>
                    <h2 className='mobile_route_h2'>Mobiles</h2>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${sam[0]}`}><h3>Samsung</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${sam[1]}`}><h3>Mi</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${sam[2]}`}><h3>Oneplus</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${sam[3]}`}><h3>realme</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${sam[4]}`}><h3>Iqoo</h3></NavLink>
                    <h2 className='mobile_route_h2'>Mobile Accessories</h2>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${sam[5]}`}><h3>Mobile Cases</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${sam[6]}`}><h3>Mobile Chargers</h3></NavLink>
                </div>
                <div className='mobile_itemsparent'>
                    {selecteddatas.map((item, index) => {
                        return (
                            <div className='mobile_itemdiv' key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${item.id}`}>
                                    <div className='mobile_imgdiv'>
                                        <img className='imgfil' src={item.image} alt='not found' />
                                    </div>
                                    <div className='mobile_contentdiv'>
                                        <h4 className='pname'>{item.pname}</h4>
                                        <h4 className='price'><span className='strike'>Rs. {item.originalPrice} </span> Rs. {item.offerPrice}</h4>
                                    </div>
                                    <button className='cartbutton' onClick={(event) => addtocartfun(event)}>Add to cart</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='previousnext_but'>
                    <button className='prevbut' onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button className='prevbut' onClick={handleNextPage} disabled={isLastPage}>
                        Next
                    </button>
                </div>
            </div >
            <Footer />
        </div>
    )
}

export default Mobiles