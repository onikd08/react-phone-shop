import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "../PhoneCard/PhoneCard";
import Button from "../Button/Button";

const PhoneDetails = () => {
  const { id } = useParams();

  const phones = useLoaderData() || [];
  const targetPhone = phones.find((phone) => phone.id === id) || {};
  const { ram, battery_capacity, storage, chipset } = targetPhone;

  return (
    <div className="min-h-[calc(100vh-76px)] max-w-lg mx-auto flex items-center">
      <PhoneCard phone={targetPhone}>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-center">Details</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <p>
              <span className="font-bold">RAM: </span>
              {ram}
            </p>
            <p>
              <span className="font-bold">Battery: </span>
              {battery_capacity}
            </p>
            <p>
              <span className="font-bold">Storage: </span>
              {storage}
            </p>
            <p>
              <span className="font-bold">Chip-Set: </span>
              {chipset}
            </p>
          </div>
          <div className="flex">
            <Button
              targetPhone={targetPhone}
              btnText={"Add to Favorites"}
            ></Button>
          </div>
        </div>
      </PhoneCard>
    </div>
  );
};

export default PhoneDetails;
