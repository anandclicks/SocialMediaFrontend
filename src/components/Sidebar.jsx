import React from "react";
import CreatePost from "./CreatePost";

const Sidebar = () => {
  return (
    <div className="shadow p-4 py-6 rounded-lg w-[300px] ">
      {/* create post component */}
      {/* <div className="createPostWrapper fixed left-0 h-full w-[320px] top-0 z-30 bg-white">
        <CreatePost/>
      </div> */}
      {/* profile  */}
      <div className="info w-full h-min-[250px] relative">
        <div className="bannerImage w-full h-[100px] bg-stone-300 rounded-xl"></div>
        {/* profile image  */}
        <div className="profileImageWrapper h-[50px] w-full flex justify-center">
          <div className="profileImage bg-white  absolute top-[15%] h-[100px] w-[100px] felx items-center justify-center rounded-full p-2">
            <div className="img h-full w-full rounded-full bg-stone-300"></div>
          </div>
        </div>
        {/* other info  */}
        <div className="otherInfo flex justify-center items-center flex-col pt-2">
          <h3 className="text-xl">Test user</h3>
          <p className="leading-4 text-sm">@testuser123</p>
        </div>
        {/* followes and otehr numbers  */}
        <div className="flex justify-center items-center gap-5 mt-4 text-sm">
          <div className="flex flex-col items-center"><span className="font-semibold">0</span> Posts</div>
          <div className="flex flex-col items-center"><span className="font-semibold">0</span>Followers</div>
          <div className="flex flex-col items-center"><span className="font-semibold">0</span>Following</div>
        </div>
        {/* action buttons  */}
      <div className="flex justify-between">
      {/* <button className="w-[47%] h-[40px] btnBg text-white cursor-pointer mt-5 rounded-xl text-sm"><i class="ri-edit-line"></i> Edit Profile</button> */}
      <button className="w-[100%] h-[40px] btnBg text-white cursor-pointer mt-5 rounded-xl text-sm"><i class="ri-add-line"></i> Create Post</button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
