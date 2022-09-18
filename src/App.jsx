import React from "react";

import "./App.css";

import Mega from "./components/mega/Mega";
import Counting from "./components/counting/Counting";
import Input from "./components/form/Input";
import IndirectFather from "./components/communication/IndirectFather";
import DirectFather from "./components/communication/DirectFather";
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
      <Card title="#13 - Mega" color="#B90063">
        <Mega></Mega>
      </Card>

      <Card title="#12 - Couting" color="#EB89C1">
        <Counting initialNumber={0}></Counting>
      </Card>

      <Card title="#11 - Controlled Components" color="#2AEB54">
        <Input></Input>
      </Card>

      <Card title="#10 - Indirect Communication" color="#41059E">
        <IndirectFather></IndirectFather>
      </Card>

      <Card title="#09 - Direct Communication" color="#F64507">
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

      <Card title="#05 - Component with childrens" color="#905BF7">
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
