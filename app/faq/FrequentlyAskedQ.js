'use client';
import FAQItem from './FAQItem';

const FrequentlyAskedQ = () => {
  const faqs = [
    {
      question: 'What is vehicle scrappage policy?',
      answer: 'The Vehicle Scrappage Policy was notified by MORTH (Ministry of Road, Transport and Highways) in Sept. 2021, aiming to replace old vehicles with modern & new vehicles on Indian roads. According to the new policy, commercial vehicles aged >15 years and passenger vehicles aged >20 years will have to mandatorily go for fitness test and if it fails, then to be treated as End-of-Life vehicle which will have to be scrapped through a RVSF (Registered Vehicle Scrappage Facility). Further, this policy also draws several incentives and dis-incentives for scrapping or continuingwith the older vehicles'
    },
    {
      question: 'How REVALUE-RVSF Scrapping Policy Works?',
      answer: 'REVALUE is owned under B V MOTORS PVT LTD, govt authorized registered vehicle scrapping facility located in Pune, Maharashtra, with upcoming multiple branches across Pune and in Maharashtra. We don\'t have any franchise partners across India. REVALUE has trained and authorised facilities as per NSF guidelines by Government of India. REVALUE would buy & own the old vehicle and dismantle it as per MISF policy guidelines and enable getting certificate of deposit & scrappage certificate for the vehicle owner.'
    },
    {
      question: 'How REVALUE works?',
      answer: `Just give us a few details about your two wheeler, car/truck to get an instant online valuation in less than 10 seconds. To get an accurate in-hand offer, schedule a free doorstep evaluation of your two wheeler, car/truck at a date & time of your convenience by calling to below mentioned number. Post evaluation and agreement on pricing, de-registration process would start and after deregistration, payment and pick-up of the vehicle by REVALUE would take place.`
    },
    {
      question: 'Why should I scrap vehicles with REVALUE?',
      answer: 'REVALUE provides a respectful experience from the best price free pick-up, deregistration of vehicles to dismantle the vehicle as per government guidelines. Further, we help getting Certificate of Deposit and Scrappage Certificate. These documents can be used to avail incentives while buying a new vehicle. Such an experience and incentives could be only given by REVALUE. REVALUE and it\'s branches are RVSF license holders and comply all norms of vehicle scrappage policy.'
    },
    {
      question: 'What are the benefits of scrapping a vehicle?',
      answer: 'Multiple benefits are announced by government of India for scrapping old vehicles and buying new ones are as follows: Owners can receive scrap value equivalent of 4-6% of ex-showroom price of new vehicles* States can give up to 25% and 15% rebate on road tax for personal and commercialvehicles, respectively all kind of incentives are to be given to seller who has certificate of deposit and scrappage certificates(These certificates can be given by only RVSF license holders).'
    },
    {
      question: 'How deregistration of commercial and passenger vehicles will take place?',
      answer: 'All 15 year old vehicles would go for mandatory fitness test in coming years. Unfit vehicles and ELV (End of Life of Vehicle) will have the option for a limited period to produce fitness certificate. But if the vehicle owner is failed to do so, then vehicle would be treated as End-Of-Life vehicle and should be deregistered on Vahan Portal with help of RVSF Authorized Dealer.'
    },
    {
      question: 'What documents are needed to sell my vehicle for scrapping?',
      answer: '1. Original registration certificate 2. PAN card of registered owner 3. KYC of registered owner (Aadhar card OR Passport OR Voter ID of registered owner)* 4. Address Proof* 5. Vehicle Ownership proof Cancelled cheque of owner/Bank details with IMPS facility registered* 6. Loan closure certificate or NOC'
    }
  ];

  return (
    <div className='wrapper'>
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>  
        </div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>

  );
};

export default FrequentlyAskedQ;