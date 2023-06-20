import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./config/firebase";
import { useStateValue } from "./service/StateProvider";
import ChatWidget from "./components/ChatWidget";
import GPTService from "./service/ChatGptService";


function App() {
  const [{ user }, dispach] = useStateValue();

  useEffect(() => {
    //will run only once when app component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS>>> ", authUser);
      if (authUser) {
        //then user just logged in or user logged in
        dispach({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the use is logged out
        dispach({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); //whatever you put here in [] then it will run everytime thing inside[] change


  return (
    //BEM conventions
    <Router>
      <div className="app">
      <GPTService/>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              user ? (
                <>
                  <Header />
                  <Checkout />
                  <ChatWidget/>

                </>
              ) : (
                <Login />
              )
            }
          />

          <Route
            path="/"
            element={
              user ? (
                <>
                  <Header />
                  <Home />
                  <ChatWidget/>

                </>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
