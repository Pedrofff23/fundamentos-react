import React from "react";

import './App.css'

import Card from "./components/layout/Card";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import Random from "./components/basics/Random";
import First from "./components/basics/First";

// eslint-disable-next-line
export default () => (
  <div className="App">
    
    <h1>React fundaments</h1>

    <div className="Cards">
      <Card title="#04 - Aleatory challenge" color="#0f0">
        <Random min={1} max={60} />
      </Card>

      <Card title="#03 - Fragment" color="#F94892">
        <Fragment />
      </Card>

      <Card title="#02 - With Parameter" color="#A10035">
        <WithParameter
          title="Second Component"
          subtitle="Working"
          grade={9.2}
        />
      </Card>

      <Card title="#01 - First Component" color="#FA2FB5">
        <First></First>
      </Card>
    </div>
  </div>
);
