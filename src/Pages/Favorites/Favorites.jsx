import { useContext } from "react";
import FavoriteContext from "../../contexts/FavoriteContext";

const Favorites = () => {
  const { favPhones } = useContext(FavoriteContext);
  return <div>{favPhones.length}</div>;
};

export default Favorites;
