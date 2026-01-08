import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ logout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <h2>Hello user welcome to Dashboard</h2>
            <h3>This page is protected</h3><br />
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;