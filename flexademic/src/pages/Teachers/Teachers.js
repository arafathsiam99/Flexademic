import React from "react";
import elonMusk from "../../images/elonMusk.jfif";
import "./Teachers.css";
function Teachers() {
  return (
    <div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 my-3">
          <div class="col">
            <div class="card h-100 border-0">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: " 50%",
                  margin: "10px auto",
                }}
                src={elonMusk}
                class="card-img-top rounded-circle"
                alt={elonMusk}
              />
              <div class="card-body">
                <h5 class="card-title">Name</h5>
                <h5 class="card-title">Email</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="  mx-auto">
                <span>
                  <i style={{ color: "#4267B2" }} class="fab fa-facebook"></i>
                </span>
                <span>
                  <i style={{ color: "#1da1f2" }} class="fab fa-twitter"></i>
                </span>
                <span>
                  <i style={{ color: "#bc2a8d" }} class="fab fa-instagram"></i>
                </span>
                <span>
                  <i style={{ color: "#FF0000" }} class="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: " 50%",
                  margin: "10px auto",
                }}
                src={elonMusk}
                class="card-img-top"
                alt={elonMusk}
              />
              <div class="card-body">
                <h5 class="card-title">Name</h5>
                <h5 class="card-title">Email</h5>
                <p class="card-text">This is a short card.</p>
              </div>
              <div className="  mx-auto">
                <span>
                  <i style={{ color: "#4267B2" }} class="fab fa-facebook"></i>
                </span>
                <span>
                  <i style={{ color: "#1da1f2" }} class="fab fa-twitter"></i>
                </span>
                <span>
                  <i style={{ color: "#bc2a8d" }} class="fab fa-instagram"></i>
                </span>
                <span>
                  <i style={{ color: "#FF0000" }} class="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: " 50%",
                  margin: "10px auto",
                }}
                src={elonMusk}
                class="card-img-top"
                alt={elonMusk}
              />
              <div class="card-body">
                <h5 class="card-title">Name</h5>
                <h5 class="card-title">Email</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              <div className="  mx-auto">
                <span>
                  <i style={{ color: "#4267B2" }} class="fab fa-facebook"></i>
                </span>
                <span>
                  <i style={{ color: "#1da1f2" }} class="fab fa-twitter"></i>
                </span>
                <span>
                  <i style={{ color: "#bc2a8d" }} class="fab fa-instagram"></i>
                </span>
                <span>
                  <i style={{ color: "#FF0000" }} class="fab fa-youtube"></i>
                </span>
              </div>
            </div>
            
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: " 50%",
                  margin: "10px auto",
                }}
                src={elonMusk}
                class="card-img-top"
                alt={elonMusk}
              />
              <div class="card-body">
                <h5 class="card-title">Name</h5>
                <h5 class="card-title">Email</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
