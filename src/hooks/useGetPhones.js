import { useEffect, useState } from "react";

const useGetPhones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const loadPhones = async () => {
      const res = await fetch("../../public/phones.json");
      const data = await res.json();
      setPhones(data);
    };
    loadPhones();
  }, []);

  return phones;
};

export default useGetPhones;
