import './Create.scss';

import { WatchContext } from "../../../Contexts/watchContetx";
import { useContext, useState } from "react";
import * as watchService from '../../../Services/watchService';
import { Link } from 'react-router-dom';

export function CreateWatch() {
    const { watchAdd } = useContext(WatchContext);
    const [errMessage, setErrMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const watchData = Object.fromEntries(new FormData(e.target));

        if (watchData.Name.length<4 || watchData.Name.length>25) {
            return setErrMessage(" Name should be between 4 and 25 characters!");
        }
        if (watchData.WaterResistance<10 || watchData.WaterResistance>200 ) {
            return setErrMessage(" Water Resistance should be number between 10 and 200!");
        }
        if (watchData.Price<10 || watchData.Price>200 ) {
            return setErrMessage(" Price should be number between 10 and 2000000!");
        }
        
        const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
        if (!regex.test(watchData.ImageUrl)) {
            return setErrMessage("ImageUrl should be a valid Url!");
        }
        if (watchData.Description.length<4 || watchData.Description.length>200) {
            return setErrMessage(" Description should be between 4 and 200 characters!");
        }

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
                                    <Link to="/">Home</Link>
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
                                                    <option value="Luxury">Luxury</option>
                                                    <option value="Casual">Casual</option>
                                                    <option value="Retro">Retro</option>
                                                    <option value="Dress">Dress</option>
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
                                            {errMessage
                                                ?
                                                <div className='col-lg-8' style={{color: 'red'}}> {errMessage} </div>
                                                :<></>
                                            }
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