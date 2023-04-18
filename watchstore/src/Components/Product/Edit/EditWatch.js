import './Edit.scss';

import { WatchContext } from "../../../Contexts/watchContetx";
import { useContext } from "react";
import * as watchService from '../../../Services/watchService';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function EditWatch() {
    const navigate = useNavigate();

    const { watches, watchEdit } = useContext(WatchContext);

    const { watchId } = useParams();

    const currentWatch = watches.find(x => x._id === watchId );

    const onSubmit = async (e) => {
        e.preventDefault();

        const watchData = Object.fromEntries(new FormData(e.target));

        await watchService.edit(watchId, watchData)
            .then(result => {
                watchEdit(watchId, result)
            });

        navigate(`/watches/${watchId}`);
    };
    return(
         <> 
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Edit offer</h4>
                                <div className="breadcrumb__links">
                                    <Link to={`/watches/${watchId}`}>Watch Details</Link>
                                    <span>Edit</span>
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
                                                <input type="text" name="Name" defaultValue={currentWatch.Name} placeholder="Name" />
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
                                                <input type="text" name="WaterResistance" defaultValue={currentWatch.WaterResistance} placeholder="Water resistance" /> <span style={{marginLeft: "-30px", color: 'grey'}}>m</span>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="Price" defaultValue={currentWatch.Price} placeholder="Price" /> <span style={{marginLeft: "-30px", color: 'grey'}}>$</span>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="ImageUrl" defaultValue={currentWatch.ImageUrl} placeholder="Image Url" />
                                            </div>
                                            <div className="col-lg-8">
                                            <textarea name="Description" defaultValue={currentWatch.Description} placeholder="Description"></textarea>
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <button type="submit" className="site-btn">
                                                    Edit
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