import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'

function PrivateRoute({children, ...rest}) {
    const {user}=useFirebase();
    console.log("user: " + user.email);
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
    )
}

export default PrivateRoute
