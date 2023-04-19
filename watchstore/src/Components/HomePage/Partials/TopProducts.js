import { WatchContext } from "../../../Contexts/watchContetx";
import { Poster } from "../../Product/Poster/WatchPoster";
import { useContext } from "react";

export function TopProducts(){


    const {watches} = useContext(WatchContext);
    const bestWatches = watches.slice(0, 4)
    

    return(
        <section className="product spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*" key={'heading'}>
                            Best Sellers
                        </li>
                    </ul>
                </div>
                </div>
                <div className="row product__filter">
                    {
                        bestWatches.map(x=> 
                            <div key={x._id} className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">   
                                <Poster  watch={x} />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>

    )
}