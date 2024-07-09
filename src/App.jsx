import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Plan from "./components/Plan";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://qa7.parentune.com/api/subscription/subscribe/v2/plans"
      );

      const data = await res.json();
      setData(data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(data);

  return (
    <div style={{ padding: "20px" }}>
      <Carousel responsive={responsive}>
        {data?.map((e) => (
          <Plan detail={e} />
        ))}
      </Carousel>
      ;
    </div>
  );
}

export default App;
