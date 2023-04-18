import './Create.scss';

import { WatchContext } from "../../../Contexts/watchContetx";
import { useContext } from "react";
import * as watchService from '../../../Services/watchService';

export function CreateWatch() {
    const { watchAdd } = useContext(WatchContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const watchData = Object.fromEntries(new FormData(e.target));

        watchService.create(watchData)
            .then(result => {
                watchAdd(result)
            });
    };
    return(
         <> 
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Create offer</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>Sell</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-details spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <div className="blog__details__content">
                                <div className="blog__details__comment">
                                    
                                    <form onSubmit={onSubmit}>
                                        <div className="row center">
                                            <div className="col-lg-8 text-center">
                                                <input type="text" name="Name" placeholder="Name" />
                                            </div>
                                            <div className="col-lg-8">
                                                <label htmlFor="category" style={{color: 'grey'}}>Category</label>
                                                <select name="Category" id="lang">
                                                    <option value="automatic">Luxury</option>
                                                    <option value="mechanical">Casual</option>
                                                    <option value="quartz">Retro</option>
                                                    <option value="quartz">Dress</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-8">
                                                <label htmlFor="Movement" style={{color: 'grey'}}>Movement</label>
                                                <select name="Movement" id="lang">
                                                    <option value="automatic">Automatic</option>
                                                    <option value="mechanical">Mechanical</option>
                                                    <option value="quartz">Quartz</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="WaterResistance" placeholder="Water resistance" /> <span style={{marginLeft: "-30px", color: 'grey'}}>m</span>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="Price" placeholder="Price" /> <span style={{marginLeft: "-30px", color: 'grey'}}>$</span>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="ImageUrl" placeholder="Image Url" />
                                            </div>
                                            <div className="col-lg-8">
                                            <textarea name="Description" placeholder="Description"></textarea>
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <button type="submit" className="site-btn">
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}