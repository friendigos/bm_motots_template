import Image from "next/image";

export default function FeatureItem({ icon, alt, title, description }) {
    return (
      <div className="featureItemBlock">
        <Image src={icon} alt={alt} width={80} height={80} />
        <h3 className="featureItemTitle">{title}</h3>
        <p className="featureItemDescription">{description}</p>
      </div>
    );
}