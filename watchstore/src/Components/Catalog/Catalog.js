import { Heading } from "./Heading/Heading";
import { Poster } from "../Product/Poster/WatchPoster";

import { Link } from "react-router-dom";

export function Catalog({watches}){
    

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
                                        <Link data-toggle="collapse" data-target="#collapseOne">
                                            Categories
                                        </Link>
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
                                                <Link to="#">Luxury (20)</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Casual (20)</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Dress (20)</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Retro (20)</Link>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseTwo">
                                            Branding
                                        </Link>
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
                                                <Link to="#">Tissot</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Rolex</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Omega</Link>
                                                </li>
                                                <li>
                                                <Link to="#">Zodiac</Link>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseThree">
                                            Filter Price
                                        </Link>
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
                                                <Link to="#">$0.00 - $50.00</Link>
                                                </li>
                                                <li>
                                                <Link to="#">$50.00 - $100.00</Link>
                                                </li>
                                                <li>
                                                <Link to="#">$100.00 - $150.00</Link>
                                                </li>
                                                <li>
                                                <Link to="#">$150.00 - $200.00</Link>
                                                </li>
                                                <li>
                                                <Link to="#">$200.00 - $250.00</Link>
                                                </li>
                                                <li>
                                                <Link to="#">250.00+</Link>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                  
                                    <div className="card">
                                        <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseSix">
                                            Movement
                                        </Link>
                                        </div>
                                        <div
                                        id="collapseSix"
                                        className="collapse show"
                                        data-parent="#accordionExample"
                                        >
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                            <Link to="#">Automatic</Link>
                                            <Link to="#">Quartz</Link>
                                            <Link to="#">Mechanical</Link>
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
                                    <p>Showing 1–9 of {watches.length} results</p>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select>
                                        <option value="">Low To High</option>
                                        <option value="">High To Low</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                {
                                    watches.length > 0
                                        ? watches.map(x => 
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <Poster key={x._id} watch={x} />
                                                </div>
                                        )
                                        : <h3 className="no-articles">No watches added yet</h3>
                                }


                            </div>
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="product__pagination">
                               <Link className="active" to="#">
                                    1
                                </Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <span>...</span>
                                <Link to="#">21</Link>
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