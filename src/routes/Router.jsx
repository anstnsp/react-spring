import React, { useState, useEffect } from "react";
import {
  Home,
  AboutPage,
  Posts,
  SignIn,
  NotFound,
  Profile,
  OAuth2RedirectHandler,
  test,
} from ".";
import { Route, Switch } from "react-router-dom";
import AppTemplate from "../components/AppTemplate";
import AppBar from "../components/Appbar";
import { getCurrentUser } from "../util/APIUtils";
// import OAuth2RedirectHandler from "../components/user/oauth2/OAuth2RedirectHandler";
import Copyright from "../components/common/Copyright";
import PrivateRoute from "../components/common/PrivateRoute";

// 라우트로 설정한 컴포넌트는, 3가지의 props 를 전달받게 됩니다:여기서는 Home,과 About

// history 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
// location 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.
// match 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.

// <Link> => HTML의 <a> 태그와 유사한 기능을 하는 컴포넌트라고 생각하시면 이해가 쉽습니다.
// <a> 태그는 href 속성을 통해 이동할 경로를 지정하는 반면에 <Link> 컴포넌트는 to prop을 통해서 이동할 경로를 지정해줍니다.

/* <Route> 컴포넌트는 현재 주소창의 경로와 매치될 경우 보여줄 컴포넌트를 지정하는데 사용됩니다.
path prop을 통해서 매치시킬 경로를 지정하고 component prop을 통해서 매치되었을 때 보여줄 컴포넌트를 할당합니다. */

/* <Router> 컴포넌트는 위에 나온 <Route>와 <Link> 컴포넌트가 함께 유기적으로 동작하도록 묶어주는데 사용합니다.
다시 말해, <Route>와 <Link> 컴포넌트는 DOM 트리 상에서 항상 <Router>를 공통 상위 컴포넌트로 가져야합니다. */
const Router = () => {
  const [authenticated, setAutenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(`componentDidMount START!`);
    loadCurrentlyLoggedInUser();
  }, []);

  const loadCurrentlyLoggedInUser = () => {
    setLoading(!loading);
  };

  getCurrentUser()
    .then((response) => {
      console.log(`response: ${response}`);
      setCurrentUser(response);
      setAutenticated(true);
      setLoading(false);
    })
    .catch((error) => {
      console.log(`getCurrentUser() error:${error}`);
      setLoading(false);
    });

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAutenticated(false);
    setCurrentUser(null);
    Alert.success("You're safely logged out!");
  };
  return (
    //header, left, body, right, bottom
    <AppTemplate
      header={<AppBar />}
      body={
        <Switch>
          <Route path="/test" component={test} />
          <Route path="/oauth2" component={OAuth2RedirectHandler} />
          <Route exact path="/" component={Home} />

          <PrivateRoute
            path="/profile"
            authenticated={authenticated}
            currentUser={currentUser}
            component={Profile}
          ></PrivateRoute>
          {/* Switch 컴포넌트를 사용하는건데요, 라우트들을 이 컴포넌트에 감싸면 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않습니다. */}
          <Route path="/about" component={AboutPage} />
          <Route path="/posts" component={Posts} />
          <Route
            path="/signin"
            render={(props) => (
              <SignIn
                authenticated={authenticated}
                currentUser={currentUser}
                {...props}
              />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      }
      bottom={<Copyright />}
    />
  );
};

export default Router;
