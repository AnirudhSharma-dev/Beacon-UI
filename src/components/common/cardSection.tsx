import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './cardSection.css';

interface CardSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const CardSection: React.FC<CardSectionProps> = ({
  title,
  icon,
  children,
  defaultExpanded = true
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="card-section">
      <div className="card-section-header" onClick={() => setExpanded(!expanded)}>
        <div className="card-section-title">
          {icon && <span className="card-section-icon">{icon}</span>}
          <span>{title}</span>
        </div>
        <button className="card-toggle-btn">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
      {expanded && <div className="card-section-body">{children}</div>}
    </div>
  );
};

export default CardSection;
