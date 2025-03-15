import React from "react";

const risks = [
  {
    title: "Lack of Documentation",
    description:
      "Documentation & paperwork with RTA is essential to transfer the vehicle ownership, de-registration of vehicle & availing NOC for scrapping. Un-authorised scrap dealers will not follow the process which leads to losing track & trail of the scrap vehicle.",
    image: "/assets/img/contact.png",
  },
  {
    title: "Illegal Activities",
    description:
      "Vehicles handed over to un-authorized scrap dealers lacks proper track & these are potentially used for illegal or criminal activities & the vehicle owner will be held responsible for the consequences arising.",
    image: "/assets/img/contact.png",
  },
  {
    title: "No Proof of Scrapping",
    description:
      "Un-authorised scrap dealers will not provide proof of scrapping & is not guaranteed that your vehicle has actually undergone scrapping & can also be plying on road illegally. Whereas an RVSF will provide certificate of scrapping as a proof & it can have benefits while purchasing new vehicle.",
    image: "/assets/img/contact.png",
  },
  {
    title: "No Tangible Benefits",
    description:
      "You may only get scrap value of vehicle if you hand over the vehicle at un-authorised scrap dealer. But when you follow proper channel for scrapping through RVSF you'll get Certificate of Scrapping & Certificate of Deposit which is tradable for concession on motor vehicle tax & registration charges on purchase of new vehicle.",
    image: "/assets/img/contact.png",
  },
];

const RiskCard = () => {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', margin: '0 auto', maxWidth: '800px', border: '2px solid #cbd5e0', borderTop: '4px solid #4a5568', textAlign: 'center', marginTop:'20px' }}>
          {/* Text Section */}
          <div style={{ width: '100%', textAlign: 'center', color: '#2d3748' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2d3748', textDecoration: 'underline' }}>
              Risks Involved In Vehicle Scrapping At Un-Authorized Scrap Dealer
            </h2>
          </div>

        {/* Text Section */}
        {/* <div style={{ width: '66.67%', textAlign: 'left', marginLeft: '32px', color: '#2d3748' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748', textDecoration: 'underline' }}>

            Risks Involved In Vehicle Scrapping At Un-Authorized Scrap Dealer
          </h2>
        </div> */}
      </div>
      {risks.map((risk, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', padding: '24px', backgroundColor: '#f7fafc', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
          {/* Text Section */}
            <div style={{ width: '80%', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4a5568', marginTop: '8px', textDecoration: 'underline' }}>

              {risk.title}
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {risk.description}
            </p>
          </div>
          <hr style={{ margin: '16px 0', border: '1px solid #cbd5e0' }} />

          {/* Circular Image Section */}
            <div style={{ width: '20%', display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>

                <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>

              <img
                src={risk.image}
                alt={risk.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RiskCard;
