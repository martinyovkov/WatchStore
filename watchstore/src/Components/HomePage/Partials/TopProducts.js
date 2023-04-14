import { Poster } from "../../Product/Poster/WatchPoster";

export function TopProducts(){

    const bestSellers = [Poster, Poster, Poster, Poster]

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
                    {
                        bestSellers.map(x=> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">   
                                <Poster/>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>

    )
}