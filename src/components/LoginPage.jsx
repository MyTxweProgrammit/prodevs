import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
    const [userId, setUserId] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const username = import.meta.env.VITE_API_ADMIN_USER
    const password = import.meta.env.VITE_API_ADMIN_PASS

    const handleLogin = () => {
        if (userId === username && pass === password) {
            login(userId, pass);
            navigate('/dashboard');
        }
        else { alert('Invalid login!') }
    };

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => 
                        setUserId(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => 
                        setPass(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;