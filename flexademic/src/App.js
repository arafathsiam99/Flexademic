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
import AboutUs from "./pages/AboutUs/AboutUs";
import AllCourses from "./pages/AllCourses/AllCourses";
import Courses from "./pages/Courses/Courses";
import MyCourses from "./pages/MyCourses/MyCourses";
import AddCourseContent from "./pages/AddCourseContent/AddCourseContent";
import CourseContent from "./pages/CourseContent/CourseContent";
import CourseEnroll from "./pages/CourseEnroll/CourseEnroll";
import Teachers from "./pages/Teachers/Teachers";

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
        
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/add-course">
          <AddCourse></AddCourse>
        </Route>
        <Route path="/all-courses">
          <AllCourses />
        </Route>
        <Route path="/my-courses">
          <MyCourses />
        </Route>
        <Route path="/add-course-content/:courseId">
          <AddCourseContent />
        </Route>
        <Route path="/get-course-content/:courseId">
          <CourseContent />
        </Route>

        <Route path="/course-enroll/:courseId">
          <CourseEnroll />
        </Route>
        <Route path="/event">
        <Event></Event>
        </Route>
        <Route path="/about" >
          <AboutUs></AboutUs>
        </Route>
        <Route path="/teachers" >
          <Teachers></Teachers>
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
