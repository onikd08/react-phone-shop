import useGetPhones from "../../hooks/useGetPhones";
import PhoneCard from "../PhoneCard/PhoneCard";

const Phones = () => {
  const phones = useGetPhones();
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {phones.map((phone) => (
          <PhoneCard phone={phone} key={phone.id}></PhoneCard>
        ))}
      </section>
    </>
  );
};

export default Phones;
