
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlay,
  faTv,
  faHistory,
  faList,
  faVideo,
  faClock,
  faThumbsUp,
  faFire,
  faShoppingCart,
  faMusic,
  faFilm,
  faNewspaper,
  faFutbol,
  faBookOpen,
  faTshirt,
  faPodcast,
  faCrown,
  faTachometerAlt,
  faChild,
  faFlag,
  faQuestionCircle,
  faComments,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const menuItems = [
    { icon: faHouse, label: "Home" },
    { icon: faPlay, label: "Shorts", extraClass: "text-black-500" },
    { icon: faTv, label: "Subscription", isBordered: true },
  ];

  const youItems = [
    { icon: faHistory, label: "History" },
    { icon: faList, label: "Playlists" },
    { icon: faVideo, label: "Your videos" },
    { icon: faClock, label: "Watch later" },
    { icon: faThumbsUp, label: "Liked videos", isBordered: true },
  ];

  const exploreItems = [
    { icon: faFire, label: "Trending" },
    { icon: faShoppingCart, label: "Shopping" },
    { icon: faMusic, label: "Music" },
    { icon: faFilm, label: "Movies" },
    { icon: faVideo, label: "Live" },
    { icon: faNewspaper, label: "News" },
    { icon: faFutbol, label: "Sports" },
    { icon: faBookOpen, label: "Courses" },
    { icon: faTshirt, label: "Fashion & Beauty" },
    { icon: faPodcast, label: "Podcasts", isBordered: true },
  ];

  const moreFromYouTubeItems = [
    { icon: faCrown, label: "YouTube Premium", isRed: true },
    { icon: faTachometerAlt, label: "YouTube Studio", isRed: true },
    { icon: faMusic, label: "YouTube Music", isRed: true },
    { icon: faChild, label: "YouTube Kids", isRed: true, isBordered: true },
  ];

  const settingsItems = [
    { icon: faFlag, label: "Report history" },
    { icon: faQuestionCircle, label: "Help" },
    { icon: faComments, label: "Send feedback" },
  ];

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className={`flex items-center pb-4 ${item.isBordered ? 'border-b-2' : ''}`}>
        <FontAwesomeIcon icon={item.icon} className={`pr-5 ${item.isRed ? 'text-red-600' : ''} ${item.extraClass}`} />
        {item.label}
      </li>
    ));
  };

  return (
    <div className="p-5 shadow-lg w-60">
      <nav>
        <ul>
          {renderMenuItems(menuItems)}
        </ul>

        <h2 className="font-bold pt-5 pb-4">You</h2>
        <ul>
          {renderMenuItems(youItems)}
        </ul>

        <h2 className="font-bold pt-5 pb-2">Subscriptions</h2>
        <div>Show more</div>
        <div className="border-b-2 pb-4">Show less</div>

        <h2 className="font-bold pt-5 pb-2">Explore</h2>
        <ul>
          {renderMenuItems(exploreItems)}
        </ul>

        <h2 className="font-bold pt-5 pb-4">More From YouTube</h2>
        <ul>
          {renderMenuItems(moreFromYouTubeItems)}
        </ul>

        <h2 className="font-bold pt-5 flex items-center pb-4">
          <FontAwesomeIcon icon={faCog} className="pr-2" />
          Settings
        </h2>
        <ul>
          {renderMenuItems(settingsItems)}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

/*
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlay, faTv,faHistory, faList, faVideo, faClock, faThumbsUp,faFire, faShoppingCart, faMusic, faFilm, faNewspaper, faFutbol, faBookOpen, faTshirt, faPodcast,faCrown, faTachometerAlt, faChild,faFlag, faQuestionCircle, faComments,faCog  } from "@fortawesome/free-solid-svg-icons";




const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <nav>
        <ul>
          <li className="flex items-center pb-3 pb-4">
            <FontAwesomeIcon icon={faHouse} className="pr-5" /> Home
          </li>
          <li className="flex items-center pb-4 ">
            <FontAwesomeIcon icon={faPlay} className="pr-5 text-black-500" /> Shorts
          </li>
          <li className="flex items-center pb-5 border-b-2">
            <FontAwesomeIcon icon={faTv} className="pr-5" /> Subscription
          </li>
        </ul>

        <h2 className="font-bold pt-5 pb-4">You</h2>
        <ul>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faHistory} className="pr-5" /> History
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faList} className="pr-5" /> Playlists
          </li>
          <li className="flex items-center pb-4 ">
            <FontAwesomeIcon icon={faVideo} className="pr-5" /> Your videos
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faClock} className="pr-5" /> Watch later
          </li>
          <li className="flex items-center pb-5 border-b-2">
            <FontAwesomeIcon icon={faThumbsUp} className="pr-5" /> Liked videos
          </li>
        </ul>

        <h2 className="font-bold pt-5 pb-2 ">Subscriptions</h2>
        <div>Showmore</div>
        <div className="border-b-2 pb-4">Showless</div>


        <h2 className="font-bold pt-5 pb-2">Explore</h2>

        <ul>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faFire} className="pr-5" /> Trending
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faShoppingCart} className="pr-5" /> Shopping
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faMusic} className="pr-5" /> Music
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faFilm} className="pr-5" /> Movies
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faVideo} className="pr-5" /> Live
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faNewspaper} className="pr-5" /> News
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faFutbol} className="pr-5" /> Sports
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faBookOpen} className="pr-5" /> Courses
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faTshirt} className="pr-5" /> Fashion & Beauty
          </li>
          <li className="flex items-center border-b-2 pb-5 mb-1 border-b-2">
            <FontAwesomeIcon icon={faPodcast} className="pr-5" /> Podcasts
          </li>
        </ul>

        <h2 className="font-bold pt-5">More From YouTube</h2>
        <ul>
          <li className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCrown} className="pr-3  text-red-600 pr-3  " /> YouTube Premium
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faTachometerAlt} className="pr-3 text-red-600 pr-3" /> YouTube Studio
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faMusic} className="pr-3 text-red-600 pr-3" /> YouTube Music
          </li>
          <li className="flex items-center pb-5 border-b-2">
            <FontAwesomeIcon icon={faChild} className="pr-3 text-red-600 pr-3 " /> YouTube Kids
          </li>
        </ul>

        <h2 className="font-bold pt-5 flex items-center pb-4"> 
          <FontAwesomeIcon icon={faCog} className="pr-2" /> 
          Settings
        </h2>        <ul>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faFlag} className="pr-3" /> Report history
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="pr-3" /> Help
          </li>
          <li className="flex items-center pb-4">
            <FontAwesomeIcon icon={faComments} className="pr-3" /> Send feedback
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
*/