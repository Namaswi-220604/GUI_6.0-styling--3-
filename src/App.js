import React from "react";
import { ServerReceive } from "./utils/ServerReceive.js";
import { ServerSend } from "./utils/ServerSend.js";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Navbar } from "./views/components/Navbar/Navbar.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/">
          <ServerReceive />
        </Route>
        <Route path="/send">
          <ServerSend />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
