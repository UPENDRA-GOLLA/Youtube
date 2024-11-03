import React from "react";

const VideoCard = ({info}) => {

  if (!info) return <div>Loading...</div>;

    // console.log(info);
        const {snippet,statistics} = info ;
    const {channelTitle,title,thumbnails} = snippet;
    return <div className="p-2 m-2 w-72 shadow-lg "> 
    <img className="rounded-lg" src={thumbnails?.medium?.url}  alt="video"/>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} 
            
            Views</li>
        </ul>
    </div>
}

export const AddVideoCard = ({info}) => {
    return <div className="p-1 border border-red-900"> <VideoCard info={info} /> </div>
    
}
export default VideoCard;