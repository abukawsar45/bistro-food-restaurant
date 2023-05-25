import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('menu.json')
      .then((response) => response.json())
      .then((data) => {
        setMenu(data)
        console.log(data)
        console.log(menu)
        setLoading(false)
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
