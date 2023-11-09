import PropTypes from "prop-types";

const Button = ({ btnText }) => {
  return (
    <button className="bg-[#9333ea] text-white rounded-lg  py-3 w-full m-4">
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};
export default Button;
