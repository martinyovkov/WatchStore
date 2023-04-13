export function TopProducts(){
    return(
        <section className="product spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                    <li className="active" data-filter="*">
                        Best Sellers
                    </li>
                    </ul>
                </div>
                </div>
                <div className="row product__filter">
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div className="product__item">
                    <div
                        className="product__item__pic set-bg"
                        data-setbg="img/product/product-1.jpg"
                        style ={{
                            backgroundImage: 'url("img/product/product-1.jpg")'
                        }}
                    >
                        <ul className="product__hover">
                        <li>
                            <a href="#">
                            <img src="img/icon/heart.png" alt="" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>Piqué Biker Jacket</h6>
                        <a href="#" className="add-cart">
                        + Add To Cart
                        </a>
                        <h5>$67.24</h5>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                    <div
                        className="product__item__pic set-bg"
                        data-setbg="img/product/product-2.jpg"
                        style ={{
                            backgroundImage: 'url("img/product/product-2.jpg")'
                        }}
                    >
                        <ul className="product__hover">
                        <li>
                            <a href="#">
                            <img src="img/icon/heart.png" alt="" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>Piqué Biker Jacket</h6>
                        <a href="#" className="add-cart">
                        + Add To Cart
                        </a>
                        <h5>$67.24</h5>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div className="product__item sale">
                    <div
                        className="product__item__pic set-bg"
                        data-setbg="img/product/product-3.jpg"
                    >
                        <span className="label">Sale</span>
                        <ul className="product__hover">
                        <li>
                            <a href="#">
                            <img src="img/icon/heart.png" alt="" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>Multi-pocket Chest Bag</h6>
                        <a href="#" className="add-cart">
                        + Add To Cart
                        </a>
                        <h5>$43.48</h5>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                    <div
                        className="product__item__pic set-bg"
                        data-setbg="img/product/product-4.jpg"
                    >
                        <ul className="product__hover">
                        <li>
                            <a href="#">
                            <img src="img/icon/heart.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <img src="img/icon/compare.png" alt="" /> <span>Compare</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <img src="img/icon/search.png" alt="" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>Diagonal Textured Cap</h6>
                        <a href="#" className="add-cart">
                        + Add To Cart
                        </a>
                        <h5>$60.9</h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}