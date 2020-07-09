import React from "react";
import Container from "@material-ui/core/Container";

const AppTemplate = ({ header, left, body, right, bottom }) => {
  const style = {
    // border: '1px solid black',
    // padding: '8px',
    // margin: "15px",
    // color: "white",
    // textDecoration: "none",
    height: "700px",
  };
  return (
    <div className="app-template">
      <div className="header">{header}</div>
      <div className="left">{left}</div>
      <Container fixed>
        <div style={style}>{body}</div>
      </Container>
      {/* <div className="body">{body}</div> */}
      <div className="right">{right}</div>
      <div className="bottom">{bottom}</div>
    </div>
  );
};

export default AppTemplate;
