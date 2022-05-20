import "./App.css";
import React from "react";
import { Route, Switch} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import PetDetails from "./views/PetDetails";
import Header from "./components/Header";
import CreatePet from "./views/CreatePet";
import EditPet from "./views/EditPet";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header link={"/pets/create/new"} />
          <Dashboard />
        </Route>
        <Route exact path="/pets/:id">
          <Header link={"/"} />
          <PetDetails />
        </Route>
        <Route exact path="/pets/create/new">
          <Header link={"/"} />
          <CreatePet />
        </Route>
        <Route exact path="/pets/:id/update">
          <Header link={'/'} />
          <EditPet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
