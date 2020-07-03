import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";

const Login = () => {
  //   onSuccess callback
  // If responseType is not 'code', callback will return the GoogleAuth object.

  // If responseType is 'code', callback will return the offline token for use on your server.

  // If you use the hostedDomain param, make sure to validate the id_token (a JSON web token) returned by Google on your backend server:

  // In the responseGoogle(response) {...} callback function, you should get back a standard JWT located at response.tokenId or res.getAuthResponse().id_token
  // Send this token to your server (preferably as an Authorization header)
  // Have your server decode the id_token by using a common JWT library such as jwt-simple or by sending a GET request to https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=YOUR_TOKEN_HERE
  // The returned decoded token should have an hd key equal to the hosted domain you'd like to restrict to.
  //헤더에 토큰 담아서 서버로 보내야함.
  //서버에서는 토큰을 받아서 디코딩함.
  // 디코딩된 토큰은
  // Google Login
  const responseGoogle = async (res) => {
    console.log(`## 구글에서 로그인성공 응답받음 ##`);
    //헤더에 토큰 담아서 백엔드서버로 보냄.
    const config = {
      headers: {
        Authorization: "Bearer " + res.tokenObj,
      },
    };
    const userProfile = res.profileObj;
    const name = userProfile.name;
    const email = userProfile.email;
    const provider = "Google";

    console.log(res);
    console.log(`tokenObj:${JSON.stringify(res.tokenObj)}`);
    console.log(`res.tokenId:${res.tokenId}`);
    console.log(`profileObj: ${res.profileObj}`);
    console.log(`name: ${res.profileObj.name}`);
    console.log(`email: ${res.profileObj.email}`);
    // const res = await axios.post(
    //   "http://localhost:8080/api/v1/auth/google",
    //   res.tokenObj,
    //   config,
    // );
  };

  // Login Fail
  const responseFail = (err) => {
    console.log("에러다에러");
    console.error(err);
  };

  const logout = (res) => {
    console.log("로그아웃됨.");
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId="256564752132-vc63t09lj5gd6k9tgsdkompnc6tanquq.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            This is my custom Google button
          </button>
        )}
        buttonText="Google 로그인"
        onSuccess={responseGoogle} //성공콜백
        onFailure={responseFail} //실패콜백
        cookiePolicy={"single_host_origin"}
      />
      {/* <GoogleLogout
      clientId="256564752132-vc63t09lj5gd6k9tgsdkompnc6tanquq.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
      >
      </GoogleLogout> */}
    </div>
  );
};

export default Login;
