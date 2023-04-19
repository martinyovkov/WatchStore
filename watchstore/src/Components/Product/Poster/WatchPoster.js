import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../../Services/authService';
import { AuthContext } from "../../../Contexts/authContext";
import { useContext } from "react";

export function Poster({watch}){
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const PosterClickHandler = () =>{
        navigate(`/watches/${watch._id}`);
    };

    const LikeHandler =  () =>{
        authService.addLikedWatch(user, watch._id);
    }
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
                                    <Link to="" onClick={LikeHandler}>
                                    <img src="img/icon/heart.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                                        
                    <div className="product__item__text">
                        <h6>{watch.Name}</h6>
                        <Link to="#" className="add-cart">
                        + Add To Cart
                        </Link>
                        <h5>${watch.Price}</h5>
                    </div>
                </div>
           
    )
}