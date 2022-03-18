import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import routes from "../../routes";

const AuthLoading = () => {
  const [loading, setLoading] = useState(false);
  const Nav = useRoutes(routes);
  return <>{loading ? <LoadingComponent /> : Nav}</>;
};

export default AuthLoading;
