import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomNames } from "../Utils/helper";
import { makeRandomMessage } from "../Utils/helper";

const LiveChat=() => {
    const [liveMessage,setLiveMessage] = useState("")
    const dispatch = useDispatch()
    const chatMesssages = useSelector((store) => store.chat.messages)
    

    useEffect(()=> {
     const i = setInterval(()=> {
        //Api polling
        

        // console.log("Api polling");
        dispatch(
            addMessage(
            {
                name:generateRandomNames(),
                message: makeRandomMessage(20) +" 🏎️",
            }
        ))
        },1500);
        return ()=>clearInterval (i);
    },[])


    return (
    <>
    <div className="ml-4 p-2 w-[400px] overflow-y-scroll h-[500px] border border-black rounded-lg bg-slate-100 flex flex-col-reverse">
 <div>
       {/* Dont use key is index */}
       {
        chatMesssages.map((c,i) => (
            <ChatMessage key={i} name={c.name} message={c.message}/>
        ))

    }
    </div>      
    </div>
<form className="w-[400px] p-2 ml-4 border border-black rounded-lg" onSubmit={(e)=> {
    e.preventDefault();
    console.log("ON FORM SUBMIT" ,liveMessage);
    dispatch (addMessage( {
        name:"Upendra",
        message:liveMessage,

    })
    );
    setLiveMessage("")
}}
>
    <input className="w-[280px] px-2 pr-2" type="text"
     value={liveMessage}
      onChange={(e)=> {
        setLiveMessage(e.target.value)
    }}/>
    <button className="px-4 mx-2 bg-green-100">Send</button>

</form>

    
    </>
    )
}
export default LiveChat;