import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useFirebase();
  console.log("user: " + user.email, isLoading);
  // useEffect(()=>{

  //   },[])
  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 position-absolute w-100">
        <div
          class="spinner-border"
          style={{ width: "4rem ", height: "4rem" }}
          role="status"
        ></div>
      </div>
    );
  }

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRoute;
