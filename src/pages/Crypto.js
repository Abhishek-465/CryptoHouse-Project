import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";
import Landing from "./Landing";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Crypto = () => {
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
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Landing/>
{ uid !=""?  <><Filters />
      <TableComponent />
      </>
      :
      <></>
      }
      <Outlet />
    </section>
  );
};

export default Crypto;
