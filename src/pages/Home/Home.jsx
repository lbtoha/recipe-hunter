import React from "react";
import Banner from "./Banner";
import ChefSection from "./Chef/ChefSection";
import Offer from "./Offer/Offer";
import Reservation from "./Reservation/Reservation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefSection></ChefSection>
      <Offer></Offer>
      <Reservation></Reservation>
    </div>
  );
};

export default Home;
