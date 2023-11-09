import PropTypes from "prop-types";
import { useContext } from "react";
import FavoriteContext from "../../contexts/FavoriteContext";
import { useNavigate } from "react-router-dom";

const Button = ({ btnText, targetPhone, phoneId }) => {
  const { favPhones, setFavPhones } = useContext(FavoriteContext);
  const navigate = useNavigate();

  const handleClick = () => {
    // switch (btnText) {
    //   case "Add to Favorites":
    //     setFavPhones([...favPhones, targetPhone]);
    //     break;
    //   case "See Details":
    //     navigate(`/phone/${targetPhone.id}`);
    //     break;
    //   default:
    //     break;
    // }
    if (targetPhone) {
      setFavPhones([...favPhones, targetPhone]);
    } else if (phoneId) {
      navigate(`/phone/${phoneId}`);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white rounded-lg  py-3 w-full m-4"
    >
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  targetPhone: PropTypes.object,
  phoneId: PropTypes.string,
};
export default Button;
