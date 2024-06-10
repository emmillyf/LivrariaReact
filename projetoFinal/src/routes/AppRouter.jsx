import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import Post from "../pages/Posts";
import Update from "../pages/Update";
import More from "../pages/More";
import Ranking from "../pages/Ranking"
import Home from "../pages/Home"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/feed" element={<Feed />}></Route>
      <Route path="/posts" element={<Post />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
      <Route path="/more/:id" element={<More />}></Route>
      <Route path="/ranking" element={<Ranking/>}></Route>
    </Routes>
  );
}

export default AppRouter;
