import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const PhoneCard = ({ phone, children }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone;

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={phone_name} className="rounded-xl h-[222px]" />
      </figure>
      <div className="m-4 flex-grow">
        <p className="text-center text-lg mb-1">{brand_name}</p>
        <h2 className="text-xl font-semibold text-center">{phone_name}</h2>
        <div className="flex-grow  flex justify-between my-2">
          <p>Price: {price}$</p>
          <p>Rating: {rating}</p>
        </div>
        <div>{children}</div>
      </div>
      {!children && (
        <Link to={`/phone/${id}`} className="flex justify-center">
          <Button btnText={"See Details"}></Button>
        </Link>
      )}
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default PhoneCard;
