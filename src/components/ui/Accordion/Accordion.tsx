import React, { useState } from 'react';
import './Accordion.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className="accordion-content"
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
