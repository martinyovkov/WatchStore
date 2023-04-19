import { Link } from "react-router-dom";
import * as watchService from '../../../Services/watchService';
import { useParams } from "react-router-dom";
import {AuthContext} from '../../../Contexts/authContext';
import { WatchContext } from "../../../Contexts/watchContetx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../../../Services/authService';

export function WatchDetails() {
	const navigate = useNavigate();
	const { watchId } = useParams();
    //const [currentWatch?, setCurrentWatch] = useState({});

	const { user } = useContext(AuthContext);
	const { watches, watchRemove } = useContext(WatchContext);

	
	const currentWatch = watches.find(x => x._id === watchId );

	console.log(currentWatch);
	const isOwner = user._id === currentWatch?._acl.creator;

	const watchDeleteHandler = async () => {
        const confirmation = window.confirm('Are you sure you want to delete this watch?');
		

        if (confirmation) {
            await watchService.remove(watchId)
                .then(() => {
                    watchRemove(watchId);
                    navigate('/catalog');
                })
        }
	}

	const LikeHandler =  async () =>{

		console.log(user.likedWacthes);

		const newArr = user.likedWacthes.push(currentWatch?._id);
		console.log(newArr);

        const response = authService.addLikedWatch(user._id, newArr);
		console.log( await response);
    }

    // useEffect(() => {
    //     watchService.getOne(watchId)
    //         .then(result => {
    //             setCurrentWatch(result);
    //         });
    // }, [watchId]);


	return(
		<section className="shop-details">
			<div className="product__details__pic">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="product__details__breadcrumb">
						<Link to="/">Home</Link>
						<Link to="/catalog">Catalog</Link>
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
								data-setbg="/img/shop-details/thumb-1.png"
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
								data-setbg="/img/shop-details/thumb-2.png"
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
								data-setbg="/img/shop-details/thumb-3.png"
								></div>
							</a>
							</li>
						</ul> */}
					</div>
					<div className="col-lg-6 col-md-9">
					<div className="tab-content">
						<div className="tab-pane active" id="tabs-1" role="tabpanel">
							<div className="product__details__pic__item">
								{/* The products image */}
								<img src={currentWatch?.ImageUrl} alt="" />
							</div>
						</div>
							{/* <div className="tab-pane" id="tabs-2" role="tabpanel">
								<div className="product__details__pic__item">
									<img src="/img/shop-details/product-big-3.png" alt="" />
								</div>
							</div>
							<div className="tab-pane" id="tabs-3" role="tabpanel">
								<div className="product__details__pic__item">
									<img src="/img/shop-details/product-big.png" alt="" />
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
						<h4>{currentWatch?.Name}</h4>
						<h3>
							${currentWatch?.Price} {/* <span>370.00</span> */}
						</h3>
						<p>
							{currentWatch?.Description}
						</p>

						{isOwner && 
							<div className="product__details__option"> 
								<Link to={`/watches/${watchId}/edit`} className="primary-btn" style= {{backgroundColor: '#80bfff', marginRight: '15px'}}>
									Edit
								</Link>
								<Link to={`/watches/${watchId}/delete`} className="primary-btn" style= {{backgroundColor: '#ff3333'}} onClick={watchDeleteHandler}>
									Delete
								</Link>
							</div>
						}
						
						<div className="product__details__cart__option">
							<Link to="#" className="primary-btn">
								add to cart
							</Link>
						</div>
						<div className="product__details__btns__option">
							<Link to="#" onClick={LikeHandler}>
								<i className="fa fa-heart" /> add to wishlist
							</Link>
						</div>
						<div className="product__details__last__option">
						<h5>
							<span>Guaranteed Safe Checkout</span>
						</h5>
						<img src="/img/shop-details/details-payment.png" alt="" />
						<ul>
							<li>
								<span>Category:</span> {currentWatch?.Category}
							</li>
							<li>
								<span>Movement:</span> {currentWatch?.Movement}
							</li>
							<li>
								<span>Water Resisatnce:</span> {currentWatch?.WaterResistance}m
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