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

        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const confirmPassword = formData.get('rePassword');

        if (email.length<6 || email.length> 25) {
            return setErrMessage(" Email should be between 6 and 25 characters!");
        }
        if (username.length<4 || username.length>16) {
            return setErrMessage(" Username should be between 4 and 16 characters!");
        }
        if (password.length<6 || password.length>12) {
            return setErrMessage(" Password should be between 8 and 12 characters!");
        }
        if (password !== confirmPassword) {
            //Should return message
            return setErrMessage("Passwords mismatch!");
        }

        try {
             authService.register(email, username, password, confirmPassword)
            .then(authData => {
                if (authData.message) {
                    console.log(authData);
                    if (authData.message === 'User Validation Error') {
                        return setErrMessage('Invalid email!')
                    }
                    return setErrMessage(authData.message);
                }else{
                    userLogin(authData);
                    navigate('/user');
                }
                
            })
        } catch (error) {
            console.log(error);
        }
       
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
                                                <input type="text" name='email' placeholder="Email" />
                                            </div>
                                            <div className="col-lg-8 text-center">
                                                <input type="text" name='username' placeholder="Username" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="password" name='password' placeholder="Password" />
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="password" name='rePassword' placeholder="Repeat Password" />
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