import { Link } from "react-router-dom"

export function Banner() {
  return(
    <section className="banner spad">
        <div className="container">
            <div className="row">
            <div className="col-lg-7 offset-lg-4">
                <div className="banner__item">
                <div className="banner__item__pic">
                    <img src="img/banner/banner1.jpg" alt="" />
                </div>
                <div className="banner__item__text">
                    <h2>Special Watch Collections</h2>
                    <Link to="/catalog">Shop now</Link>
                </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                    <img src="img/banner/banner3.webp" alt="" />
                </div>
                <div className="banner__item__text">
                    <h2>Accessories</h2>
                    <Link to="/catalog">Shop now</Link>
                </div>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                    <img src="img/banner/banner2.webp" alt="" />
                </div>
                <div className="banner__item__text">
                    <h2>Luxury Watches</h2>
                    <Link to="/catalog">Shop now</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

  )

}