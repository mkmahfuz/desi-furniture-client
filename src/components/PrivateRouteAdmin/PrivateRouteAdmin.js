import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AdminContext } from '../../App';

const PrivateRouteAdmin = ({children,...rest}) => {
    const [adminUser,setAdminUser] = useContext(AdminContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        adminUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRouteAdmin;