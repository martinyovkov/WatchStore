import './Auth.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/authContext';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../Services/authService';


export function Login(){
    const { userLogin } = useContext(AuthContext);
    const [errMessage, setErrMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            password,
        } = Object.fromEntries(new FormData(e.target));

        if (username.length<4 || username.length>16) {
            return setErrMessage(" Username should be between 4 and 16 characters!");
        }
        if (password.length<6 || password.length>12) {
            return setErrMessage(" Password should be between 6 and 12 characters!");
        }

        authService.login(username, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch((error) => {
                setErrMessage(error.message);
            });
    };

    return(
        <> 
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Login</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>Login</span>
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

                                            {errMessage
                                                ?
                                                <div className='col-lg-8' style={{color: 'red'}}> {errMessage} </div>
                                                :<></>
                                            }
                                            
                                            <div className="col-lg-12 text-center">
                                                <button type="submit" className="site-btn">
                                                    Login
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