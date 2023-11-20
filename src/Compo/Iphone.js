import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { storeData } from '../DataStore/DataStore';
import Footer from './Footer';
import CartButton from '../Cart/CartButton';

function Iphone() {
    const [datas] = useContext(storeData);
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filtereddatas = datas.filter(item => (item.category === "mobile" || item.category === "case" || item.category === "charger") && (item.brand === "apple"));
    const divisibleby4 = Math.floor(filtereddatas.length / 4) * 4;
    const selectedDatasby4 = filtereddatas.slice(0, divisibleby4);
    const selecteddatas = selectedDatasby4.slice(startIndex, endIndex)
    console.log(filtereddatas);
    const isLastPage = endIndex >= filtereddatas.length;
    console.log("endindex", endIndex)
    console.log("data length:", filtereddatas.length)
    console.log("filtereddata", filtereddatas.length)
    // const shuffledDatas = [...filtereddatas].sort(() => Math.random() - 0.5);
    // const selectedDatas = shuffledDatas.slice(0, 8);

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
    const iph = ["Iphone13", "Iphone14", "Iphone15", "icase", "icharger"];
    return (
        <div>
            <div className='mobile_parentdiv'>
                <div className='mobile_routediv'>
                    <h2 className='mobile_route_h2'>Iphones</h2>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${iph[0]}`}><h3>Iphone 13 Series</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${iph[1]}`}><h3>Iphone 14 Series</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${iph[2]}`}><h3>Iphone 15 series</h3></NavLink>
                    <h2 className='mobile_route_h2'>Apple Accessories</h2>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${iph[3]}`}><h3>case</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${iph[4]}`}><h3>Charger</h3></NavLink>
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
                                    <CartButton item={item} />
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

export default Iphone