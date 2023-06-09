import './Auth.scss';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../Services/authService';
import { AuthContext } from '../../Contexts/authContext';
import { useContext } from 'react';
import { useState } from 'react';
 
export function Register(){
    const [errMessage, setErrMessage] = useState('');
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');
        const confirmPassword = formData.get('repeatPassword');


        if (username.length<4 || username.length>16) {
            return setErrMessage(" Username should be between 4 and 16 characters!");
        }
        if (password.length<6 || password.length>12) {
            return setErrMessage(" Password should be between 6 and 12 characters!");
        }
        if (password !== confirmPassword) {
            //Should return message
            return setErrMessage("Passwords mismatch!");
        }

        authService.register(username, password)
            .then(authData => {
                userLogin(authData);
                console.log(authData);
                navigate('/user');
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
                                            {errMessage
                                                ?
                                                <div className='col-lg-8' style={{color: 'red'}}> {errMessage} </div>
                                                :<></>
                                            }
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