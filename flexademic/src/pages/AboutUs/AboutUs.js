import React from "react";
import aboutus from "../../images/about_us.svg";
function AboutUs() {
  return (
    <div>
      <div className="contianer">
        <div className="row login_style">
          <div className="col-md-6">
            <img className="w-75" src={aboutus} alt="" />
          </div>
          <div className="col-md-6 my-5">
            <h1 className="text-center">About Us</h1>
            <p>
              Welcome to the Complete Web Development Bootcamp, the only course
              you need to learn to code and become a full-stack web developer.
              With 150,000+ ratings and a 4.8 average, my Web Development course
              is one of the HIGHEST RATED courses in the history of Udemy! At
              55+ hours, this Web Development course is without a doubt the most
              comprehensive web development course available online. Even if you
              have zero programming experience, this course will take you from
              beginner to mastery. Here's why: The course is taught by the lead
              instructor at the App Brewery, London's leading in-person
              programming bootcamp. The course has been updated to be 2022 ready
              and you'll be learning the latest tools and technologies used at
              large companies such as Apple, Google and Netflix. This course
              doesn't cut any corners, there are beautiful animated explanation
              videos and tens of real-world projects which you will get to
              build. The curriculum was developed over a period of four years,
              with comprehensive student testing and feedback. We've taught over
              a million students how to code and many have gone on to change
              their lives by becoming professional developers or starting their
              own tech startup. You'll save yourself over $12,000 by enrolling,
              but still get access to the same teaching materials and learn from
              the same instructor and curriculum as our in-person programming
              bootcamp. The course is constantly updated with new content, with
              new projects and modules determined by students - that's you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
