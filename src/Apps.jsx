import React from "react";

import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import Random from "./components/basics/Random";
import First from "./components/basics/First";

// eslint-disable-next-line 
export default () => (
  <div id="app">
    <h1>React fundaments</h1>
    <Random min={1} max={60}/>
    <Fragment />
    <WithParameter title="Student Situation" student="Pedro" grade={9.3} />
    <First></First>
  </div>
);
