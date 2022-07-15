import { FunctionComponent, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface MainLayoutProps {}
export interface IContext {
  sideBarShow: boolean;
  setSideBarShown: (e: boolean) => void;
}
/**
 *
 * @returns MainLayout page can return the page if there is user or not it can decide what to do
 * it can wrap each page with something like a side menu or a navbar or something that shows up in all pages
 */
const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  // you can use this state to hide or show a side menu or a navbar in any page from the main root routes "/"
  // its passed to the putlet which is the current displayed page so it can be accessed
  const [sideBarShow, setSideBarShown] = useState(true);
  const ctx: IContext = { setSideBarShown, sideBarShow };
  //   here every page will be wrapped with this div except login page

  const navigate = useNavigate();

  //   i set a user as null you can get it from an api or whatever
  //   put something in this user constant to be able to access the root routes

  const user = null;

  //   this useEffect will redirect the user to login page if there is no user
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  //   if no user we return null and no page to show
  if (!user) return null;

  return (
    <div>
      {/* if you want a navbar */}
      {sideBarShow && <nav></nav>}
      <Outlet context={ctx} />
    </div>
  );
};

export default MainLayout;
