import { Link } from "react-router-dom";

export function WatchDetails(){
	return(
		<section className="shop-details">
			<div className="product__details__pic">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="product__details__breadcrumb">
						<Link to="/">Home</Link>
						<Link to="./shop.html">Shop</Link>
						<span>Product Details</span>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-3">
						
						{/* <ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
							<a
								className="nav-link active"
								data-toggle="tab"
								href="#tabs-1"
								role="tab"
							>
								<div
								className="product__thumb__pic set-bg"
								data-setbg="img/shop-details/thumb-1.png"
								></div>
							</a>
							</li>
							<li className="nav-item">
							<a
								className="nav-link"
								data-toggle="tab"
								href="#tabs-2"
								role="tab"
							>
								<div
								className="product__thumb__pic set-bg"
								data-setbg="img/shop-details/thumb-2.png"
								></div>
							</a>
							</li>
							<li className="nav-item">
							<a
								className="nav-link"
								data-toggle="tab"
								href="#tabs-3"
								role="tab"
							>
								<div
								className="product__thumb__pic set-bg"
								data-setbg="img/shop-details/thumb-3.png"
								></div>
							</a>
							</li>
						</ul> */}
					</div>
					<div className="col-lg-6 col-md-9">
					<div className="tab-content">
						<div className="tab-pane active" id="tabs-1" role="tabpanel">
							<div className="product__details__pic__item">
								<img src="img/shop-details/product-big-2.png" alt="" />
							</div>
						</div>
							{/* <div className="tab-pane" id="tabs-2" role="tabpanel">
								<div className="product__details__pic__item">
									<img src="img/shop-details/product-big-3.png" alt="" />
								</div>
							</div>
							<div className="tab-pane" id="tabs-3" role="tabpanel">
								<div className="product__details__pic__item">
									<img src="img/shop-details/product-big.png" alt="" />
								</div>
							</div> */}
					</div>
					</div>
				</div>
				</div>
			</div>
			<div className="product__details__content">
				<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-8">
					<div className="product__details__text">
						<h4>Hooded thermal anorak</h4>
						<h3>
							$270.00 <span>70.00</span>
						</h3>
						<p>
							Coat with quilted lining and an adjustable hood. Featuring long
							sleeves with adjustable cuff tabs, adjustable asymmetric hem with
							elastic side tabs and a front zip fastening with placket.
						</p>
						<div className="product__details__option"></div>
						<div className="product__details__cart__option">
						<a href="#" className="primary-btn">
							add to cart
						</a>
						</div>
						<div className="product__details__btns__option">
						<a href="#">
							<i className="fa fa-heart" /> add to wishlist
						</a>
						</div>
						<div className="product__details__last__option">
						<h5>
							<span>Guaranteed Safe Checkout</span>
						</h5>
						<img src="img/shop-details/details-payment.png" alt="" />
						<ul>
							<li>
								<span>SKU:</span> 3812912
							</li>
							<li>
								<span>Categories:</span> Clothes
							</li>
							<li>
								<span>Tag:</span> Clothes, Skin, Body
							</li>
						</ul>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
		</section>

	);
}