'use client';
import FAQItem from './FAQItem';

const FrequentlyAskedQ = () => {
  const faqs = [
    {
      question: 'Question',
      answer: 'Answer'
    },
    {
      question: 'Question',
      answer: 'Answer'
    },
    {
      question: 'Question',
      answer: 'Answer'
    },
    {
      question: 'Question',
      answer: 'Answer'
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
