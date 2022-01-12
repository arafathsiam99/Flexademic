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
import MyEnrolledCourses from "./pages/Courses/MyEnrolledCourses";
import Students from "./pages/Students/Students";
import Contact from "./pages/Contact/Contact";
import AllEnrolledCourses from "./pages/AllEnrolledCourses/AllEnrolledCourses";
import AddEvents from "./pages/AddEvents/AddEvents";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        <PrivateRoute exact path="/courses">
          <Courses />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <PrivateRoute path="/add-course">
          <AddCourse></AddCourse>
        </PrivateRoute>
        <PrivateRoute path="/all-courses">
          <AllCourses />
        </PrivateRoute>
        <PrivateRoute path="/my-courses">
          <MyCourses />
        </PrivateRoute>
        <PrivateRoute path="/add-course-content/:courseId">
          <AddCourseContent />
        </PrivateRoute>
        <PrivateRoute path="/get-course-content/:courseId">
          <CourseContent />
        </PrivateRoute>
        <PrivateRoute path="/course-enroll/:courseId">
          <CourseEnroll />
        </PrivateRoute>
        <PrivateRoute path="/my-enrolled-course">
          <MyEnrolledCourses />
        </PrivateRoute>
        <PrivateRoute path="/all-enrolled-courses">
          <AllEnrolledCourses />
        </PrivateRoute>
        <PrivateRoute path="/add-events">
          <AddEvents />
        </PrivateRoute>
        <Route path="/events">
        <Event></Event>
        </Route>
        <Route path="/about" >
          <AboutUs></AboutUs>
        </Route>
        <Route path="/teachers" >
          <Teachers></Teachers>
        </Route>
        <Route path="/students" >
          <Students />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route  path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer></Footer>
      
    </Router>
  );
}

export default App;
