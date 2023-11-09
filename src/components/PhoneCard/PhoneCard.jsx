import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
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
      </div>
      <div className="flex justify-center">
        <Link
          to={`/phone/${id}`}
          className="bg-[#9333ea] text-white rounded-lg text-center py-3 w-full m-4"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default PhoneCard;
