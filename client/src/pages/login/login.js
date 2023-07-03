import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login () {

    let md5 = require('md5');

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "admin" && passwd === "21232f297a57a5a743894a0e4a801fc3") {
            setErrorMsg("");
            console.log("PASSED. CHANGE THIS BLOCK");
            navigate('/editCrossword', { state: { status: 1 }})
        } else {
            setErrorMsg("Invalid Credentials!");
        }
    }

    return (
        <>
            <div className="login-page-container">
                <h1 className="login-page-title">Biotechnology Crossword</h1>
                <div className="login-card">
                    <form onSubmit={handleSubmit} className="login-form">
                        <h1 className="login">Login</h1>
                        <input
                            type="text"
                            className="login-input"
                            id="username"
                            placeholder="Username"
                            spellCheck="false"
                            onChange={(e) => {setUsername(e.target.value)}}
                        />
                        <input
                            type="password"
                            className="login-input"
                            id="pwd"
                            placeholder="Password"
                            onChange={(e) => {setPasswd(md5(e.target.value))}}
                        />
                        <button type="submit" className="login-button">Login</button>
                        <p className="login-error-message">{errorMsg}</p>
                    </form>
                </div>
            </div>
        </>
    );
}