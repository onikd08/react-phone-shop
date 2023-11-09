import PropTypes from "prop-types";

const Button = ({ btnText }) => {
  return (
    <button className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white rounded-lg  py-3 w-full m-4">
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};
export default Button;
