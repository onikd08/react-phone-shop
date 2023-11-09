import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import FavoriteContext from "../contexts/FavoriteContext";
import { useState } from "react";

const MainLayout = () => {
  const [favPhones, setFavPhones] = useState([]);
  return (
    <FavoriteContext.Provider value={{ favPhones, setFavPhones }}>
      <>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </>
    </FavoriteContext.Provider>
  );
};

export default MainLayout;
