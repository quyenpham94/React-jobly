import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./routes-nav/Navigation";


function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  // const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  
  console.debug(
    "App",
    "infoLoaded", infoLoaded,
    "currentUser", currentUser,
    // "token=", token,
  );

  const logout = () => {

  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation logout={logout} />

      </div>
    </BrowserRouter>
  );
}

export default App;
