import React from 'react';
import { DocumentPopupData } from '../../data/appConsts';
import StyledButton from '../../assets/widgets/StyledButton';

interface DocumentsPopupViewProps {
  data: DocumentPopupData;
}

const DocumentsPopupView: React.FC<DocumentsPopupViewProps> = ({ data }) => {
  return (
    <div className="documents-popup-content">

      {/* Pitches Section */}
      <section className="section">
        <h3 className="section-title">Pitches</h3>
        {data.pitches.length === 0 ? (
          <p>No pitches available.</p>
        ) : (
          <ul>
            {data.pitches.slice(0, 3).map((pitch, idx) => (
              <li key={idx}>{pitch}</li>
            ))}
          </ul>
        )}
        <StyledButton className="popup-action-btn" onClick={() => alert('Create New Pitch')}>
          Create New Pitch
        </StyledButton>
      </section>

      {/* Proposals / RFP / Business Case */}
      <section className="section">
        <h3 className="section-title">Proposals / RFP / Business Case</h3>

        <div className="doc-list-block">
          <h4>Proposals:</h4>
          <ul>
            {data.proposals.slice(0, 3).map((item, idx) => (
              <li key={idx}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="doc-list-block">
          <h4>RFPs:</h4>
          <ul>
            {data.rfps.slice(0, 3).map((item, idx) => (
              <li key={idx}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="doc-list-block">
          <h4>Business Cases:</h4>
          <ul>
            {data.businessCases.slice(0, 3).map((item, idx) => (
              <li key={idx}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="button-group">
          <StyledButton onClick={() => alert('Create Proposal')}>Create Proposal</StyledButton>
          <StyledButton onClick={() => alert('Create RFP')}>Create RFP</StyledButton>
          <StyledButton onClick={() => alert('Create Business Case')}>Create Business Case</StyledButton>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h3 className="section-title">Contact</h3>
        {data.contacts.map((contact, idx) => (
          <div key={idx} className="contact-card">
            <p><strong>{contact.name}</strong></p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <div className="button-group">
              <StyledButton onClick={() => alert(`Generate email for ${contact.name}`)}>Generate Email</StyledButton>
              <StyledButton onClick={() => alert(`Generate call script for ${contact.name}`)}>Generate Call Script</StyledButton>
            </div>
          </div>
        ))}
      </section>

      {/* Additional Links */}
      <section className="section">
        <h3 className="section-title">Additional Detail and Links</h3>
        <ul>
          {data.links.map((link, idx) => (
            <li key={idx}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default DocumentsPopupView;
