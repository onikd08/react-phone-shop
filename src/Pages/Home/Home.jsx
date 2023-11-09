import Banner from "../../components/Banner/Banner";
import useGetPhones from "../../hooks/useGetPhones";

const Home = () => {
  const phones = useGetPhones();
  return (
    <div>
      <Banner></Banner>
      {phones.length}
    </div>
  );
};

export default Home;
