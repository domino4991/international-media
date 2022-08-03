import React, { } from "react";
import {Route, Routes } from "react-router-dom";
import "./Eng/English";


import { Engg, Russ } from "./path";
import English from "./Eng/English";
import Russian from "./russ/Russian";

const AppRouter = () => {
  return (
    <Routes>
        <Route path={Engg} element={<English/>} key={Engg} />
        <Route path={Russ} element={<Russian/>} key={Russ} />
      </Routes>
  );
};

export default AppRouter;
