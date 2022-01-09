import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import AddCourse from "./pages/AddCourse/AddCourse";
import Event from "./pages/Event/Event";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/addcourse">
          <AddCourse></AddCourse>
        </Route>
        <Route path="/event">
        <Event></Event>
        </Route>
      </Switch>
      <Footer></Footer>
      {/* <Route exact path="*">
          <NotFound />
        </Route> */}
    </Router>
  );
}

export default App;
