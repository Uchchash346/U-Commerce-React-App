import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    return (
        <div className="register-parent">
            <div className="register-top">

            </div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_yr6zz3wv.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
                <div className="col-md-4 z1">
                    <div className="register-form">
                        <h2>Register</h2>
                        <hr />
                        <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="confirm password" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
                        <button className="my-3">REGISTER</button>
                        <hr />
                        <Link to="/login">Click Here To Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage