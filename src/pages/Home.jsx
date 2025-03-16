import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Notification from "../components/Notification";
import SuggestionsUsercard from "../components/SuggestionsUsercard";
import axios from "axios";
import { LoggedInUserContent } from "../../contentProvider/LoggedinUser.content";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // api call for autheticate user is loggedin or not
  const [redirect, setredirect] = useState(false);
  const { setloggedInUser } = useContext(LoggedInUserContent);
  const checkForUserAuthentication = async () => {
    const response = await axios.get("/v1/users/loggedin-user-data", {
      withCredentials: true,
    });
    if (response.data.status) {
      setloggedInUser(response.data.user);
    } else {
      setredirect(false);
    }
  };

  // handling redirection
  const navigate = useNavigate();
  useEffect(() => {
    checkForUserAuthentication();
    if (redirect) {
      navigate("/login");
    }
  }, [redirect]);
  return (
    <div className="p-5 h-[100vh] w-full flex overflow-x-hidden">
      <div className="homeLeft ">
        {/* sidebar  */}
        <Sidebar />
      </div>
      <div className="homeRight p-4 w-[90%] overflow-scroll">
        {/* storeies  */}
        <div className="w-full flex justify-between">
          <h3 className="text-xl">Stories</h3>
          <Notification />
        </div>

        {/* stories  */}
        <Stories />

        {/* posts and suggestion ids */}
        <div className="posts&notification flex">
          <div>
            <Post />
            <Post />
            <Post />
          </div>
          {/* suggestion ids */}
          <div className="p-5 userSuggestion w-[400px]">
            <h2 className="text-lg mb-3">Suggestions</h2>
            <SuggestionsUsercard />
            <SuggestionsUsercard />
            <SuggestionsUsercard />
            <SuggestionsUsercard />
            <SuggestionsUsercard />
            <SuggestionsUsercard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
