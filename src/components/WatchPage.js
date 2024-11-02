import React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../Utils/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentContainer from "./CommentsContainer"
const WatchPage = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get('V'));

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(closeMenu())
    },[])
  
   return (
   <div  className="flex flex-col">
   <div className="px-5 ">
    
   <iframe width="1000" height="500" className="rounded-lg"

   src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
   title="YouTube video player" 
    frameBorder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
  </div>
  <CommentContainer/>
   </div>
   )
}
export default WatchPage;