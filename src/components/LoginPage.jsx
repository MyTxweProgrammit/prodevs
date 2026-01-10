import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';

const LoginPage = ({ login }) => {
    const [checkedBox, setCheckedBox] = useState(true);
    const [userId, setUserId] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const username = import.meta.env.VITE_API_ADMIN_USER
    const password = import.meta.env.VITE_API_ADMIN_PASS

    Date.prototype.addMinute = function(h) {
        this.setTime(this.getTime() + ((h*60*60*1000)/60));
        return this;
    }
    Date.prototype.addHour = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
    }

    const SESSION = localStorage.ss_token ? JSON.parse(localStorage.ss_token) : ''
    console.log(SESSION)
    if (SESSION.remember && SESSION.exp >= new Date().getTime()) {
        login(SESSION.username, SESSION.password);
        navigate('/dashboard');
    } else { localStorage.removeItem('ss_token') }
    
    const handleLogin = () => {
        if (userId === username && pass === password) {
            var session = {
                token: '2dc1c45d-575c-4658-8ef1-8c0a79d2510b',
                exp: new Date().addMinute(2).getTime(),
                expdate: new Date().addMinute(2).addHour(7),
                remember: checkedBox,
            }
            localStorage.setItem('ss_token', JSON.stringify(session))
            login(userId, pass);
            navigate('/dashboard');
        }
        else { alert('Invalid login!') }
    };
    return (
        <div className='w-screen h-screen bg-white'>
            <title>ProDEVs - Login</title>
            <Header wants={true}/>
            <div className='center pt-[30px]'>
                <div className='border border-solid border-[#BFBFBF] w-[270px] py-[20px] px-[28px] rounded-[10px] shadow-xl'>
                    <p className='text-black font-bold inter-txwe text-[28px]'>Sign In</p>
                    <p className='text-black inter-txwe text-[15px] mt-[-5px]'>Welcome Back My Friend!</p>
                    <section className='mt-[20px]'>
                        <p className='text-black inter-txwe text-[12px] font-bold'>Username or Email Address</p>
                        <input
                            className='text-[#A7A7A7] border border-solid border-[#A7A7A7] rounded-[5px] px-[15px] py-[6px] outline-none'
                            type="text"
                            placeholder="Example@gmail.com"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)} 
                        />
                    </section>
                    <section className='mt-[20px] w-fit'>
                        <aside className='flex justify-between items-center'>
                            <p className='text-black inter-txwe text-[12px] font-bold'>Password</p>
                            <Link className='text-[12px]'>Forgot Password?</Link>
                        </aside>
                        <input
                            className='text-[#A7A7A7] border border-solid border-[#A7A7A7] rounded-[5px] px-[15px] py-[6px] outline-none'
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        /> 
                    </section>
                    <section className="flex gap-[7px] mt-[10px]">
                        <input type="checkbox" checked={checkedBox} onChange={(e) => setCheckedBox(e.target.checked)}/>
                        {/* <input type="checkbox" /> */}
                        <p className='text-black text-[12px] inter-txwe'>Remember Me</p>
                    </section>
                    <div 
                        onClick={handleLogin}
                        className='cursor-pointer bg-linear-to-r from-[#89CCFF] to-[#005DA4] inter-txwe text-[13px] text-center py-[8px] rounded-[20px] mt-[10px] text-white'>
                        Submit
                    </div>
                    {/* Do It HERE soon */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

{/* <input
    type="text"
    placeholder="User ID"
    value={userId}
    onChange={(e) =>
        setUserId(e.target.value)}
/>
<input
    type="text"
    placeholder="Password"
    value={pass}
    onChange={(e) =>
    setPass(e.target.value)}
/> 
<button onClick={handleLogin}>Login</button>
*/}