import React from "react";

const Sidebar = () => {
  return (
    <div className="shadow p-4 py-6 rounded-lg w-[300px] ">
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
        {/* go to profile button  */}
        <button className="w-full h-[40px] btnBg text-white cursor-pointer mt-5 rounded-2xl">My Profile</button>
      </div>
    </div>
  );
};

export default Sidebar;
