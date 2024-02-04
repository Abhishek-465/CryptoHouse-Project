import React, { useState, useEffect } from 'react';
import pic from '../assets/landing.png';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'animate.css';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Landing = () => {
  const [uid, setUid] = useState('');
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid('');
      }
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (
    <>
    <div className="flex justify-center mb-8">

      <div className="text-center text-lg my-16 mr-4 w-[400px] animate__animated animate__slideInLeft">
        <h1 className="text-[30px] text-bold mb-2">Your go-to destination for the evolving Crypto landscape!</h1>
        <p className='text-[18px] text-gray-100 px-5'>Welcome to CryptoHouse, uncover the latest crypto news, insights, and resources. Explore with us, whether you're a veteran or newcomer.</p>

        <nav
          className="w-[70%] mt-8 ml-12 flex justify-around align-middle
           rounded-lg"
        >
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return `w-full text-base text-center font-nunito m-2.5 rounded-xl

${isActive
  ? 'bg-pink text-gray-300'
  : 'bg-pink text-back hover:bg-gray-200 hover:text-white active:bg-cyan active:text-gray-300'
}
border-0 cursor-pointer rounded capitalize font-semibold`;
            }}
          >
            {uid === '' ? <p>Login</p> : <p>Signed-In</p>}
          </NavLink>

          <NavLink
        to="/chatbot"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5 rounded-xl

${
  isActive
    ? "bg-pink text-gray-300"
    : "bg-back border-2 border-white text-white hover:bg-white hover:text-back "
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Assistant
      </NavLink>
        </nav>
      </div>
      <img src={pic} className='w-[410px] hidden lg:inline-block animate__animated animate__slideInRight' alt="landing" />
    </div>
    </>
  );
};

export default Landing;
