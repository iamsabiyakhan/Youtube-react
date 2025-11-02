import React, { useState, useEffect } from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"; // ✅ Added useSelector
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice'; // ✅ Added import
import { YOUTUBE_SEARCH_API } from "../utils/constants";  

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search); // ✅ Correct
  
  useEffect(() => {
    // Debouncing with 200ms delay
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        //  Cache hit - use cached data
        setSuggestions(searchCache[searchQuery]);
      } else {
        //  Cache miss - make API call
        getSearchSuggetion();
      }
    }, 200);
     
    return () => clearTimeout(timer);
  }, [searchQuery]);
  
  const getSearchSuggetion = async () => {
    console.log("API CALL - " + searchQuery); // ✅ Track API calls
    
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("API RESPONSE - ", json);
    
    setSuggestions(json[1]);
    
    // ✅ Update cache
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));
  };
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      
      {/* Left Section (Menu + Logo) */}
      <div className="flex items-center col-span-1 gap-3">
        <FiAlignJustify 
          className="text-2xl cursor-pointer" 
          onClick={toggleMenuHandler} 
        />
        <img
          className="h-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtube-logo"
        />
      </div>

      {/* Middle Section (Search Bar) */}
      <div className="col-span-10 flex items-center justify-center">
        <div className="w-1/2 relative"> {/* ✅ Added relative for positioning */}
          <div className="flex">
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // ✅ Small delay
              placeholder="Search"
              className="w-full border border-gray-400 p-2 rounded-l-full focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="border border-gray-400 p-2 rounded-r-full focus:outline-none bg-gray-200 hover:bg-gray-300">
              <FiSearch className="text-2xl" />
            </button>
          </div>
          
          {/* ✅ Suggestions dropdown - better positioning */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute bg-white py-2 px-5 w-full shadow-lg rounded-lg border border-gray-200 mt-1">
              <ul>
                {suggestions.map((s) => (
                  <li 
                    key={s} 
                    className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Section (User Icon) */}
      <div className="col-span-1 flex items-center justify-end">
        <FaUserCircle className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;