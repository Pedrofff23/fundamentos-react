import React from "react";

import "./App.css";

import DirectFather from "./components/communication/DirectFather"
import UserInfo from "./components/condicional/UserInfo";
import EvenOrOdd from "./components/condicional/EvenOrOdd";
import ProductsTable from "./components/repetition/ProductsTable";
import StudentList from "./components/repetition/StudentList";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
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
      <Card title="#09 - Direct Communicatiob" color="rgb(4, 150, 255)">
        <DirectFather></DirectFather>
      </Card>

      <Card title="#08 - Conditional Render" color="#982395">
        <EvenOrOdd number={20}></EvenOrOdd>
        <UserInfo user={{ name: "Pedro" }} />
        <UserInfo />
      </Card>

      <Card title="#07 - Repetition Challenge" color="rgb(4, 150, 255)">
        <ProductsTable></ProductsTable>
      </Card>

      <Card title="#06 - Repetition" color="#0f0">
        <StudentList></StudentList>
      </Card>

      <Card title="#05 - Component with chindrens" color="#905BF7">
        <Family surname="Santana">
          <FamilyMember nome="Pedro" />
          <FamilyMember nome="Luan" />
          <FamilyMember nome="Julia" />
        </Family>
      </Card>

      <Card title="#04 - Aleatory challenge" color="#0f0">
        <Random min={1} max={60} />
      </Card>

      <Card title="#03 - Fragment" color="#F94892">
        <Fragment />
      </Card>

      <Card title="#02 - With Parameter" color="#A10035">
        <WithParameter
          title="Second Component"
          student="Pedro"
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
