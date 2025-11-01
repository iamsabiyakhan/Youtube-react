import React from "react";
import { FiAlignJustify,FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { useState,useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";  

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(()=>{
    // console.log("searchQuery",searchQuery);
    // Make an API call or perform a search based on the searchQuery
    const timer = setTimeout(()=>getSearchSuggetion(),200);
    return () => clearTimeout(timer);
  },[searchQuery])
  const getSearchSuggetion = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log("searchSuggestion",json);
    setSuggestions(json[1]);
  }
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      
      {/* Left Section (Menu + Logo) */}
      <div className="flex items-center col-span-1 gap-3">
        {/* Hamburger Icon */}
        <FiAlignJustify className="text-2xl cursor-pointer" onClick={toggleMenuHandler} />

        {/* YouTube Logo */}
        <img
          className="h-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtube-logo"
        />
      </div>

      {/* Middle Section (Search Bar) */}
      <div className="col-span-10 flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onFocus = {()=>{setShowSuggestions(true)}}
          onBlur = {()=>{setShowSuggestions(false)}}
          placeholder="Search"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full focus:outline-none"
          onChange={(e) => {setSearchQuery(e.target.value)}}
        />
        <button className="border border-gray-400 p-2 rounded-r-full focus:outline-none bg-gray-200 hover:bg-gray-300">
          <FiSearch className="text-2xl" />
        </button>
      </div>
      {showSuggestions && <div className="fixed bg-white py-2 mx-90 mt-15 px-2 w-148 shadow-lg rounded-lg border border-white">
        <ul>
          { suggestions.map((s)=><li key={s} className="bg-white p-2 shadow-lg">{s}</li>)}
        </ul>
      </div>}

      {/* Right Section (User Icon) */}
      <div className="col-span-1 flex items-center justify-end">
        <FaUserCircle className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
