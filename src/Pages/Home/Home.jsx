import Banner from "../../components/Banner/Banner";
import Phones from "../../components/Phones/Phones";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Phones></Phones>
      </div>
    </div>
  );
};

export default Home;
