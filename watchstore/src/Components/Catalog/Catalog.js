import { Heading } from "./Heading/Heading";
import { Poster } from "../Product/Poster/WatchPoster";

export function Catalog(){

    const bestSellers = [Poster, Poster, Poster, Poster, Poster, Poster, Poster, Poster, Poster];
    return(
        <>
            <Heading></Heading>

            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop__sidebar">
                                <div className="shop__sidebar__search">
                                    <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <span className="icon_search" />
                                    </button>
                                    </form>
                                </div>
                                <div className="shop__sidebar__accordion">
                                    <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">
                                            Categories
                                        </a>
                                        </div>
                                        <div
                                        id="collapseOne"
                                        className="collapse show"
                                        data-parent="#accordionExample"
                                        >
                                        <div className="card-body">
                                            <div className="shop__sidebar__categories">
                                            <ul className="nice-scroll">
                                                <li>
                                                <a href="#">Men (20)</a>
                                                </li>
                                                <li>
                                                <a href="#">Women (20)</a>
                                                </li>
                                                <li>
                                                <a href="#">Bags (20)</a>
                                                </li>
                                                <li>
                                                <a href="#">Clothing (20)</a>
                                                </li>
                                                <li>
                                                <a href="#">Shoes (20)</a>
                                                </li>
                                                <li>
                                                <a href="#">Accessories (20)</a>
                                                </li>
                                                <li>
                                                <a href="#">Kids (20)</a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseTwo">
                                            Branding
                                        </a>
                                        </div>
                                        <div
                                        id="collapseTwo"
                                        className="collapse show"
                                        data-parent="#accordionExample"
                                        >
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                            <ul>
                                                <li>
                                                <a href="#">Louis Vuitton</a>
                                                </li>
                                                <li>
                                                <a href="#">Chanel</a>
                                                </li>
                                                <li>
                                                <a href="#">Hermes</a>
                                                </li>
                                                <li>
                                                <a href="#">Gucci</a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseThree">
                                            Filter Price
                                        </a>
                                        </div>
                                        <div
                                        id="collapseThree"
                                        className="collapse show"
                                        data-parent="#accordionExample"
                                        >
                                        <div className="card-body">
                                            <div className="shop__sidebar__price">
                                            <ul>
                                                <li>
                                                <a href="#">$0.00 - $50.00</a>
                                                </li>
                                                <li>
                                                <a href="#">$50.00 - $100.00</a>
                                                </li>
                                                <li>
                                                <a href="#">$100.00 - $150.00</a>
                                                </li>
                                                <li>
                                                <a href="#">$150.00 - $200.00</a>
                                                </li>
                                                <li>
                                                <a href="#">$200.00 - $250.00</a>
                                                </li>
                                                <li>
                                                <a href="#">250.00+</a>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                  
                                    <div className="card">
                                        <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">
                                            Movement
                                        </a>
                                        </div>
                                        <div
                                        id="collapseSix"
                                        className="collapse show"
                                        data-parent="#accordionExample"
                                        >
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                            <a href="#">Automatic</a>
                                            <a href="#">Quartz</a>
                                            <a href="#">Mechanical</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop__product__option">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__left">
                                    <p>Showing 1–9 of 126 results</p>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select>
                                    <option value="">Low To High</option>
                                    <option value="">$0 - $55</option>
                                    <option value="">$55 - $100</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                {
                                    bestSellers.map(x=> 
                                        <div className="col-lg-4 col-md-6 col-sm-6">   
                                            <Poster/>
                                        </div>
                                    )
                                }


                            </div>
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="product__pagination">
                                <a className="active" href="#">
                                    1
                                </a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <span>...</span>
                                <a href="#">21</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}