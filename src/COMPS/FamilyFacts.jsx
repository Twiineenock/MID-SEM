import React, { useState, useEffect } from 'react';
import '../CSS/about.css'; // Import your CSS file for styling

const FamilyFacts = ({ facts }) => {
  const [factIndex, setFactIndex] = useState(0);
  //(prevIndex) => (prevIndex + 1) % imagesUrls.length
  useEffect(() => {
    const factInterval = setInterval(() => {
      setFactIndex(prevIndex => (prevIndex + 1) % facts.length)
      
    }, 5000); // 6 seconds for each fact

    return () => {
      clearInterval(factInterval);
    };
  }, [factIndex, facts]);

  return (
    <div className="container">

      <div className='facto'>

      <span className='span'>Family Fun Facts</span>
      <div className="factman">{facts[factIndex]}</div>
      
      </div>

    </div>
  );
};

export default FamilyFacts;
