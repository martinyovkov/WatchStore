import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import {useState} from 'react';

export function Header() {
    const [searchOpened, SetSearchOpened] = useState(false);

    const OnClickHandler = () =>{
        SetSearchOpened(!searchOpened);
    }

    return(
            <> 
                <div className="container">

                    <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                        <Link to="/">
                            <img src="/img/logo6.png" alt="" />
                        </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li>
                                    <NavLink to="/"> Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/catalog">Catalog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/watches/create">Sell Watch</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                        <Link to="" className="search-switch" >
                            <img src="/img/icon/search.png" onClick={OnClickHandler} alt="" />
                        </Link>
                        <Link to="/user">
                            <img src="/img/icon/heart.png" alt="" />
                        </Link>
                        <Link to="/user/shoppingcart">
                            <img src="/img/icon/cart.png" alt="" /> <span>0</span>
                        </Link>
                        <div className="price">$0.00</div>
                        </div>
                    </div>
                    </div>
                    <div className="canvas__open">
                    <i className="fa fa-bars" />
                    </div>
                </div>


                <div className="search-model" style={ searchOpened ? {display: "block"} : {display: 'none'}} onBlur={OnClickHandler}>
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch" onClick={OnClickHandler}>+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
            </>
           
    );
}