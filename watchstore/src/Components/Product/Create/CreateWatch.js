//import './Create.scss';

export function CreateWatch() {
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
                                    
                                    <form action="#">
                                        <div className="row center">
                                            <div className="col-lg-8 text-center">
                                                <input type="text" name="Name" placeholder="Name" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="Category" placeholder="Category" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="Movement" placeholder="Movement" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" name="WaterResistance" placeholder="Water resistance" />
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