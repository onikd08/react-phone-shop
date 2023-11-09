import PropTypes from "prop-types";
import { useContext } from "react";
import FavoriteContext from "../../contexts/FavoriteContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Button = ({ btnText, targetPhone, phoneId }) => {
  const { favPhones, setFavPhones } = useContext(FavoriteContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (targetPhone) {
      const found = favPhones.find((phone) => phone.id === targetPhone.id);
      if (!found) {
        setFavPhones([...favPhones, targetPhone]);
        swal("Great!!!", "Item is added in your favorite list!", "success");
      } else {
        swal(
          "Oops!",
          "This item is already exists in your favorite list!",
          "error"
        );
      }
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
