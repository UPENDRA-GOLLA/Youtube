import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestion,setSuggestion] = useState([]);
  const [showSuggetion,setShowSuggestion] = useState(false);
  
  const searchCache = useSelector((store)=> store.search)

  useEffect(()=> {
   
    // console.log(searchQuery);

    //make an API calls every key stroke 
    // but if the difference between 2 API calls is lessthan 200ms
    // decline the API calls

    /**
     * searchCache = {
     * 'iphone' : ["iphone 11" , "iphone 14"
     * ]}
     * next time  i am search the iphone it will not give results because i alredy store the api
     * serachquery = iphone
     */
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]) {
        setSuggestion((searchCache[searchQuery]))
      }
        else {
          getSearchSuggention()
        }
      }
       
        ,200);
    return () => {
      clearTimeout(timer)
    }
  },[searchQuery]);

  /**
   * press key -i 
   *  -- it will  render the component
   *  --it will call useEfect()
   * start timer => make api call after 200ms
   * 
   * one more key i pressed key -iphone
   * 
   * -- before 200ms you will press the key it will distroy the component(useEffect return method)
   *  --it will again re rendered componet
   * --it will call useEfect()
   *    * start timer => make api call after 200ms it is new timer
   * 
   * 
   * setTimer(200) make an api call
   * 
   */

  const getSearchSuggention = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);

    // update cache
    dispatch(cacheResults(
     {
     [ searchQuery]: json[1]
     
     }
    ))
  }

  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2  shadow-lg">
      <div className="flex col-span-1 ">
        
       <FontAwesomeIcon icon={faBars} className="h-6 m-2 cursor-pointer" onClick={()=> {toggleMenuHandler()}} /> 
       <a href="/"> 

       <img className="h-11  w-50 mt-0 mx-2"
          alt="youtube-logo"
src="https://www.gstatic.com/youtube/img/promos/growth/2c86013cfb51f78fd2102b43578af954a74ea35953d530d15e28ff3ec47198bf_244x112.webp" />

</a>
      </div>
      <div className="col-span-10 px-10">
      <div>
        <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"type="text" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={()=> setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />

        <button className="border border-gray-400 px-5  py-2 rounded-r-full bg-gray-100"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      {showSuggetion && 
      <div className=" fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 ">
      <ul >
 {suggestion.map((s) => (
    <li key={s} className="py-2 shodow-sm"> <FontAwesomeIcon icon={faSearch} className="mr-2"/>{s}</li>
))
 }
        

      </ul>
      
      </div>
      }
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
