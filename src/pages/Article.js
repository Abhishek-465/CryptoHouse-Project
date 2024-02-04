import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import News from "./News";



const Article = () => {
  return (
    <div>
        <section className=" h-full flex flex-col mt-16 mb-24 relative">
        <News/>
      <Outlet/>
        </section>
    </div>
  )
}

export default Article