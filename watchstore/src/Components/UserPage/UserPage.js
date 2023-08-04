import { AuthContext } from "../../Contexts/authContext";
import { WatchContext } from "../../Contexts/watchContetx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Poster } from "../Product/Poster/WatchPoster";


export function UserPage(){
    const {user} = useContext(AuthContext);
    const {watches} = useContext(WatchContext);

    const yourWatchesIds = [];
    const yourWatches = [];
    yourWatchesIds.forEach(id => {
        const watch = watches.find(x=> x._id === id);
        if (watch) {
            yourWatches.push(watch);
        }
    });


    return (
        <>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4> Profile </h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <span>Profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__text">
                        <div className="section-title">
                           
                            <h2> Hi {user.username}! </h2>
                             <span>Quote of the day</span>
                            <p>
                                Everyone looks at your watch and it represents who you are, your values and your personal style.
                            </p>
                            <p>
                                Kobe Bryant
                            </p>
                        </div>
                        <ul>
                            <li>
                            <h4>Find us</h4>
                            <p>
                                195 E Parker Square Dr, Parker, CO 801 <br />
                                +43 982-314-0958
                            </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="product spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*" key={'heading'}>
                            Your liked watches
                        </li>
                    </ul>
                </div>
                </div>
                <div className="row product__filter">
                    {
                        yourWatches.length > 0
                        ? yourWatches.map(x => 
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <Poster key={x._id} watch={x} />
                                </div>
                        )
                        : <h3 className="no-articles">No watches added yet</h3>
                        
                    }
                </div>
            </div>
        </section>
        </>
      
    );
}