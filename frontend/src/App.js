import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./routes-nav/Navigation";
import useLocalStorage from "./hooks/useLocalStorage";
import Routes from './routes-nav/Routes';
import JoblyApi from './api/api';
import UserContext from "./auth/UserContext";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "jobly-token";
function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  
  console.debug(
    "App",
    "infoLoaded", infoLoaded,
    "currentUser", currentUser,
    "token=", token,
  );

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { sucess: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors }
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };

    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  const hasAppliedToJob = (id) => {
    return applicationIds.has(id);
  }

  const applyToJob = (id) => {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username.id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
      <div className="App">
        <Navigation logout={logout} />
        <Routes login={login} signup={signup} />

      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
