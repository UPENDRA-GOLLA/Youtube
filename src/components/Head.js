import React from "react";
import img from "./youtube-removebg-preview.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2  shadow-lg">
      <div className="flex col-span-1 ">
        
        <FontAwesomeIcon icon={faBars} className="h-6 m-2" /> 
       <img className="h-8  mt-0 mx-2"
          alt="youtube-logo"
src={img}  />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className="col-span-1">
        <img className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
