import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function SearchProducts() {
    const location = useLocation().state;
    const navi = useNavigate();
    console.log("values:", location.searchResult);
    const searchResults = location.searchResult;
    const searchText = location.searchText;
    const addtocartfun = (event) => {
        navi("/cart");
        event.preventDefault();
    }
    return (
        <div>
            <h1 className='dynamictopic'>search results for "{searchText}"</h1>
            <div className='home_itemsparent'>
                {searchResults.map((item, index) => {
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

export default SearchProducts