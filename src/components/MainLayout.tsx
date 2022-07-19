import { FunctionComponent, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

interface MainLayoutProps {}
export interface IContext {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const navigate = useNavigate();
  const user = 3;

  return user ? <Outlet /> : navigate("/login");
};

export default MainLayout;
