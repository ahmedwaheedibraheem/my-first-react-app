import React from 'react';
import { Link } from 'react-router-dom'
import '../../style.css';

const navbar = (props) => {
    return (
            <div className="header">
                <div className="header__upper">
                    <div className="container">
                        <ul className="list list--hr list--hr-separator">
                            <li className="list__item">
                                <span className="info">
                                    <i className="info__icon far fa-dot-circle"></i>
                                    <span className="info__data">1234 Street Name, City Name</span>
                                </span>
                            </li>
                            <li className="list__item">
                                <a href="#" className="info">
                                    <i className="info__icon fab fa-whatsapp"></i>
                                    <span className="info__data">123-456-7890</span>
                                </a>
                            </li>
                            <li className="list__item">
                                <a href="#" className="info">
                                    <i className="info__icon far fa-envelope"></i>
                                    <span className="info__data">mail@domain.com</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="list list--hr">
                            <li className="list__item">
                                <a href="#" className="link">
                                    <i className="link__icon fas fa-angle-right"></i>
                                    About Us
                                </a>
                            </li>
                            <li className="list__item">
                                <a href="#" className="link">
                                    <i className="link__icon fas fa-angle-right"></i>
                                    Contact Us
                                </a>
                            </li>
                            <li className="list__item">
                                <div className="dropdown ">
                                    <div className="dropdown__header">
                                        <a href="#" className="link">
                                            <img className="flag flag-us" src="" alt="" />
                                            English
                                        </a>
                                        <i className="fas fa-angle-down"></i>
                                    </div>

                                    <div className="dropdown__body">
                                        <ul className="dropdown__items list">
                                            <li className="dropdown__item list__item">
                                                <a href="#" className="link">
                                                    <img className="flag flag-us" src="" alt="" />
                                                    English
                                                </a>
                                            </li>
                                            <li className="dropdown__item list__item">
                                                <a href="#" className="link">
                                                    <img className="flag flag-es" src="" alt="" />
                                                    Español
                                                </a>
                                            </li>
                                            <li className="dropdown__item list__item">
                                                <a href="#" className="link">
                                                    <img className="flag flag-fr" src="" alt="" />
                                                    Française
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header__middle container">
                    <a href="#" className="header__logo-box">
                    </a>
                    <div className="header__user-options">
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <div className="image image--small image--circle" style={{ backgroundImage: "" }}>
                                </div>
                            </div>
                            <div className="dropdown__body">

                            </div>
                        </div>
                        <div className="dropdown dropdown--left  ">
                            <div className="dropdown__header">
                                <div className="image image--small" style={{ backgroundImage: "" }}>
                                    <div className="notification notification--danger">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown__body">
                                <ul className="dropdown__items list list--vr-separator">
                                    <li className="dropdown__item list__item">
                                        <div className="item-small-1">
                                            <div className="item-small-1__data">
                                                <a href="" className="item-small-1__title">Camera X1000</a>
                                                <span className="item-small-1__description">
                                                    1 X $890
                                                </span>
                                            </div>
                                            <div className="item-small-1__image-box">
                                                <a href="#" className="item-small-1__image image" style={{ backgroundImage: "" }}>
                                                </a>
                                                <a href="#" className="item-small-1__action">
                                                    <i className="fas fa-times"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown__item list__item">
                                        <div className="item-small-1">
                                            <div className="item-small-1__data">
                                                <a href="" className="item-small-1__title">Camera X2000</a>
                                                <span className="item-small-1__description">
                                                    2 X $990
                                                </span>
                                            </div>
                                            <div className="item-small-1__image-box">
                                                <a href="#" className="item-small-1__image image" style={{ backgroundImage: "" }}>
                                                </a>
                                                <a href="" className="item-small-1__action">
                                                    <i className="fas fa-times"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="separator"></div>
                                <div className="block">
                                    <span className="lable">Total:</span>
                                    <span className="lable">$2870</span>
                                </div>
                                <div className="block list list--hr">
                                    <a className="list-item btn btn--gray" href="">View Cart</a>
                                    <a className="list-item btn btn--primary" href="">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__lower container">
                    <nav className="nav">
                        <ul className="nav__items list list--hr">
                            <li className="nav__item">
                                <a className="nav__link" href="#">Home</a>
                            </li>
                            <li className="nav__item dropdown ">
                                <a className="nav__link dropdown__header" href="#">
                                    Products
                                </a>
                                <div className="dropdown__body">
                                    
                                    {/* ROUTING LINKS */}
                                    
                                    <ul className=" list">
                                        <li className="list__item">
                                            <Link to="/">Product Listing</Link>
                                        </li>
                                        <li className="list__item">
                                            <Link to="/add-product">Add Product</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">Contact Us</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">About Us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>                           
    );
}

export default navbar;