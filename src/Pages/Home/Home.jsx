import React from "react";
import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Deals from "../../Components/Deals/Deals";
import NewArrival from "../../Components/NewArrival/NewArrival";
import FollowUs from "../../Components/FollowUs/FollowUs";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>

      <div>
        <Brand />
      </div>

      <div>
        <Deals />
      </div>

      <div>
        <NewArrival />
      </div>

      <div>
        <FollowUs />
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
