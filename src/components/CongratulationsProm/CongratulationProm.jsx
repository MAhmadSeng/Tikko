import React from "react";
import Card from "../Card/Card";
import PartyPopper from '../../../public/Images/PartyPopper'

function CongratulationProm() {
  return (
    <>
      <Card
     height="300px"
      width="386px"
      // ImgSrc="../../../public/Images/party-popper.png"
      ImgSrc={
        <PartyPopper/>
      }
      title="Congratulations"
      subtitle="Promotion is duplicated successfully"
      messageCongrat="You just sent messages to 125 affiliates to promote your selected product(s)."
    />
</>
    
  );
}

export default CongratulationProm;
