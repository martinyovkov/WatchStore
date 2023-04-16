import { Link, useNavigate } from "react-router-dom"

export function Poster({watch}){
    const navigate = useNavigate();

    const PosterClickHandler = () =>{
        navigate(`/watches/${watch._id}`);
    };
    return (
            
                <div className="product__item">
                        <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-1.jpg"
                            style ={{
                                backgroundImage: `url("${watch.ImageUrl}")`
                            }}
                            onClick={PosterClickHandler}
                        >
                            <ul className="product__hover">
                                <li>
                                    <Link to="">
                                    <img src="img/icon/heart.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                                        
                    <div className="product__item__text">
                        <h6>{watch.Name}</h6>
                        <a href="#" className="add-cart">
                        + Add To Cart
                        </a>
                        <h5>${watch.Price}</h5>
                    </div>
                </div>
           
    )
}