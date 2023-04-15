import { Link, useNavigate } from "react-router-dom"

export function Poster(product){
    const navigate = useNavigate();

    const PosterClickHandler = () =>{
        navigate('/watches/5');
    };
    return (
          
                <div className="product__item">
                        <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-1.jpg"
                            style ={{
                                backgroundImage: 'url("img/product/product-1.jpg")'
                            }}
                            onClick={PosterClickHandler}
                        >
                            <ul className="product__hover">
                                <li>
                                    <Link to="/watches/5">
                                    <img src="img/icon/heart.png" alt="" />
                                    </Link>
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
           
    )
}