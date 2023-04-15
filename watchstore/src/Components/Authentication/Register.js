import './Auth.scss';


export function Register(){
    return(
        <> 
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Register</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>Register</span>
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
                                                <input type="text" placeholder="Email" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" placeholder="Password" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" placeholder="Repeat Password" />
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <button type="submit" className="site-btn">
                                                    Register
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