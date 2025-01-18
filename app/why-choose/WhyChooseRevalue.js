import FeatureItem from './FeatureItem';

export default function WhyChooseReValue() {
  return (
    <div className="whyChooseRewireContainer">
      <h2 className="whyChooseRewireHeading">Why to Choose <span className="whyChooseRewireLogo">REVALUE</span> ? </h2>
      <div className="whyChooseRewireFeatures">
        <FeatureItem 
          icon="/assets/img/why-chooose/Environment.svg"
          alt="Eco Friendly" 
          title="Environmental Friendly Vehicle Disposal" 
          description="Depollution and Dismantling in State of Art Facilities and As Per Vehicle Scrappage Policy" 
        />
        <FeatureItem 
          icon="/assets/img/why-chooose/BestPrice.svg"
          alt="Transparent Pricing" 
          title="Best & Transparent Price" 
          description="Through Proprietary Pricing Tool" 
        />
        <FeatureItem 
          icon="/assets/img/why-chooose/SeamlessSellingExperience.svg"
          alt="Seamless Journey" 
          title="Seamless Vehicle Disposal Journey" 
          description="Digitally Enabled Doorstep Evaluation, Deregistration to Dismantling of Vehicles" 
        />
      </div>
    </div>
  );
}