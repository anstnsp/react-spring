import React, { Component } from "react";
import AppTemplate from "../components/AppTemplate";
import Appbar from "../components/Appbar";
import Main from "../components/Main";

const Home = () => {
  return <AppTemplate appbar={<Appbar />} body={<Main />} />;
};

export default Home;
