import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin, FaMoneyCheck, FaTwitter } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Forum = () => {
  const [newName, setNewName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [image, setImage] = useState("");
  const [website, setWebsite] = useState("");
  

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "coach");



  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    
    <div className="text-center py-4" >
      <h1 className="text-xl font-bold">Your Favorite Coaches</h1>
      <p style={{color:"#ddd7d7"}}>Subscribe to get the mentorship from the Experts.</p>
    <div className="flex flex-wrap justify-center mt-8 ">
      {users.map((user) => {
        return (
          <div className=" w-[320px] h-[360px] rounded-3xl mx-4 my-4 " style={{
            background: "linear-gradient(black,#291a1a)", // Adjust colors as needed
          }}>
            <div className="flex justify-center py-4">
            <img className="w-[170px] h-[170px] rounded-full hover:scale-105" src={user.image}/>
            </div>
            <div className="flex flex-col justify-center items-center">
            <h1>{user.name}</h1>
            <h1 style={{color:"#ddd7d7"}}><a href={user.website}>{user.website}</a></h1>

            <div className="flex my-2 justify-center">
            <a
            className="text-white mx-1"
            href={user.twitter}
            rel="noreferrer"
            target={"_blank"}
          >
            <FaTwitter/>
          </a>
              </div>
              <div className="flex">
              <a
            className="text-white mx-1"
            href=""
            rel="noreferrer"
            target={"_blank"}
          >
            <div className="flex w-[120px] my-2 bg-back rounded-2xl text-center justify-center">
            <span className="mx-3.5 "><a href="https://buy.stripe.com/test_3cs9Ecebc5NO0pOcMN">Subscribe</a></span>
            </div>
          </a>
                </div>
            </div>
          </div>
        );
      })}
    </div>
    
    </div>
  );
}

export default Forum