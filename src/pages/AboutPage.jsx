import React from "react";
import Appbar from "../components/Appbar";
import AppTemplate from "../components/AppTemplate";
const AboutPage = () => {
  return (
    <AppTemplate
      appbar={<Appbar />}
      body={
        <div>
          안녕하세요. 이 블로그는 리액트를 경험하기 위해 만들어 졌습니다.
        </div>
      }
    />
  );
};

export default AboutPage;
