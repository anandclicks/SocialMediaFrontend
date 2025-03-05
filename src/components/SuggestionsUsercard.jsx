import React, { useState } from 'react'

const SuggestionsUsercard = () => {
      const [followState, setfollowState] = useState(false);
      const handleFollowBtn = ()=> {
        setfollowState((prev) => !prev)
      }
  return (
        <div className="profileInfo flex gap-2 items-center mb-4 justify-between w-full">
    <div className="flex items-center justify-center gap-2">
    <div className="profileImage h-[50px] w-[50px] rounded-full bg-stone-200"></div>
     <div className="">
       <p className="leading-2">anandclicks1</p>
       <small>@testuser</small>
     </div>
    </div>
       {/* follow btn  */}
       <div onClick={()=> handleFollowBtn()} className="follow btnBg text-white flex items-center justify-center h-[35px] w-[100px] text-sm  rounded-lg cursor-pointer">
         {followState ? "Following" : "Follow"}
     </div>
   </div>
  )
}

export default SuggestionsUsercard