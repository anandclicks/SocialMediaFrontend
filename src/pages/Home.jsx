import React from "react";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="p-5 h-[100vh] w-full flex overflow-x-hidden">
      <div className="homeLeft ">
        {/* sidebar  */}
        <Sidebar />
      </div>
      <div className="homeRight p-4 w-[90%] overflow-scroll">
        {/* storeies  */}
        <Stories/>

        {/* posts  */}
        <Post/>
        <Post/>
        <Post/>
        
      </div>
    </div>
  );
};

export default Home;
