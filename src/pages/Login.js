import React, { useEffect, useState, useRef } from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import Home from "./Home";
import { getAuth } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import pic from "../assets/profile.png";

function Login() {
  const [uid, setUid] = useState('');
  const [value, setValue] = useState('');
  const unsubscribeRef = useRef(null);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      setUid("logged");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  }, []);

  useEffect(() => {
    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid('');
      }
    });

    // Assign the unsubscribe function to the ref
    unsubscribeRef.current = authUnsubscribe;

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Call the unsubscribe function using the ref
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }

      // Trigger onAuthStateChanged again to update the component's state
      const authUnsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid);
        } else {
          setUid('');
        }
      });

      // Update the unsubscribe function in the ref
      unsubscribeRef.current = authUnsubscribe;
    });
  };

  return (
    <div>
      {uid !== "" ? (
        <div className="w-[380px] h-[380px] mt-8 py-3 rounded-lg flex flex-col justify-center items-center text-back bg-gray-200 shadow-inner shadow-gray-100" >
          <img className="w-[160px] h-[160px] mb-7 rounded-full" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b995d431264881.56493d87e7ed0.jpg"/>
          <div className="bg-gray-200 text-white w-[140px] h-[40px] p-1 rounded-md text-center">Already signed in!</div>
          <button className="bg-red w-[76px] text-white rounded-xl" onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div className="w-[380px] h-[380px] mt-8 py-3 rounded-lg flex flex-col justify-center items-center text-back bg-gray-200 shadow-inner shadow-gray-100">
          <h1 className="text-bold text-[30px] text-center mb-8 text-white">Login</h1>
          <img className="w-[150px] mb-7 rounded-full" src={pic}/>
          <button className="bg-purple text-white w-[180px] h-[48px] rounded-xl" onClick={handleClick}>Continue With Google <div className="flex justify-center"><FaGoogle/></div></button>
        
        </div>
      )}
    </div>
  );
}

export default Login;
