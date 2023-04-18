import './Auth.scss';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../Services/authService';
import { AuthContext } from '../../Contexts/authContext';
import { useContext } from 'react';
 
export function Register(){

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');
        const confirmPassword = formData.get('repeatPassword');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(username, password)
            .then(authData => {
                userLogin(authData);
                console.log(authData);
                navigate('/');
            });
    }
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
                                    
                                    <form onSubmit={onSubmit}>
                                        <div className="row center">
                                            <div className="col-lg-8 text-center">
                                                <input type="text" name='username' placeholder="Username" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="password" name='password' placeholder="Password" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="password" name='repeatPassword' placeholder="Repeat Password" />
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