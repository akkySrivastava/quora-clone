import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import Quora from "./components/Quora";
import ExpandedPost from "./components/posts/ExpandedPost";
import Form from "./components/Form/Form"
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);

  

  return <div className="App">
    {user ? 
          <Router>
          <Switch>
            <Route exact path="/" component={Quora} />
            <Route path="/post" component={ExpandedPost} />
            <Route path="/collaborate" component={Form}  />
            <Redirect to="/" />
          </Switch>
      </Router>
    : <Login />}
    </div>;
}

export default App;
