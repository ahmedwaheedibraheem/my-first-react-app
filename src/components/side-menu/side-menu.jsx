import React from 'react';
import '../../style.css';

const sideMenu = (props) => {
    return(
            <section className="filters">
                <div className="search-box">
                    <input className="search-box__input" placeholder="Search..." type="text" name="txt_search" id="" />
                    <button type="submit" className="search-box__btn">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div>
                    <h5>Categories</h5>
                    <ul className="list list--vr-separator">
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Arts & Crafts</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Automotive</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Baby</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Books</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Eletronics</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Women's Fashion</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Men's Fashion</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Health & Household</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Home & Kitchen</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Military Accessories</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Movies & Television</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Sports & Outdoors</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Tools & Home Improvement</li>
                        <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Toys & Games</li>
                    </ul>
                </div>
                <div>
                    <h5></h5>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div>
                    <h5></h5>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>    
    );
}

export default sideMenu;