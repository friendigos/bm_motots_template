
import React from 'react';
import CustomItem from './CustomItem'; 

const Works = () => (
  <div className="custom-component">
    <h1 className="custom-heading">How B M Motors Works</h1>
    <div className="custom-items-container">
      <CustomItem
        imageSrc='\assets\img\works\onlinePriceCheck.gif'
        title="Online Price Check"
        description="Get Instant Price"
      />
      <CustomItem
        imageSrc='\assets\img\works\vehicleEvaluation.gif'
        title="Vehicle Evaluation"
        description="Free Doorstep Evaluation"
      />
      <CustomItem
        imageSrc='\assets\img\works\deregistration.gif'
        title="Deregistration"
        description="Compliant with Govt. Policy"
      />
      <CustomItem
        imageSrc='\assets\img\works\paymentpicup.gif'
        title="Payment & Pick-Up"
        description="Instant Payment & Free Pick-Up"
      />
      <CustomItem
        imageSrc='\assets\img\works\DD.gif'
        title="Depollutioning & Dismantling"
        description="Compliant with Vehicle Scrappage Policy"
      />
    </div>
  </div>
);

export default Works;
