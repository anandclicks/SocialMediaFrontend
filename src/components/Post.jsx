import React, { useState } from "react";
import SuggestionsUsercard from "./SuggestionsUsercard";

const Post = () => {
  const [like, setlike] = useState("ri-thumb-up-line");
  const [likeState, setlikeState] = useState(1);
  const [dislike, setdislike] = useState("ri-thumb-down-line");
  const [dislikeState, setdislikeState] = useState(1);
  const [followState, setfollowState] = useState(false);
  const handleLike = () => {
    if (likeState) {
      setlike("ri-thumb-up-fill");
      setlikeState(0);
    } else {
      setlike("ri-thumb-up-line");
      setlikeState(1);
    }
  };
  const handledisLike = () => {
    if (dislikeState) {
      setdislike("ri-thumb-down-fill");
      setdislikeState(0);
    } else {
      setdislike("ri-thumb-down-line");
      setdislikeState(1);
    }
  };
  return (
    <div className="h-[500px] w-[500px] p-3 mt-3 shadow rounded-2xl">
      {/* profile info  */}
      <SuggestionsUsercard/>
      {/* imagae  */}
      <div className="postedImage h-[80%] w-[100%] bg-stone-200 rounded-2xl"></div>
      {/* action buttons  */}
      <div className="flex gap-5">
        <div
          onClick={() => handleLike()}
          className="likebtncontainer flex items-center gap-2 mt-2 cursor-pointer popbtn"
        >
          <i class={`${like} `}></i> Liks
        </div>
        <div
          onClick={() => handledisLike()}
          className="dislikebtncontainer flex items-center gap-2  mt-2 cursor-pointer popbtn"
        >
          <i class={`${dislike} `}></i> Disliks
        </div>
        <div className="commentcontainer flex items-center gap-2  mt-2 cursor-pointer">
          <i class="ri-chat-3-line"></i> Comment
        </div>
      </div>
    </div>
  );
};

export default Post;
