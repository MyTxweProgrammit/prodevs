import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ logout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('ss_token')
        logout();
        navigate('/');
    };

    return (
        <div>
            <title>ProDEVs - Admin Dashboard</title>
            <h2>Hello User Welcome to Admin Dashboard</h2>
            <h3>This page is protected</h3><br />
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;