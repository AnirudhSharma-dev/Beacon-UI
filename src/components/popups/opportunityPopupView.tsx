import React from 'react';
import { OpportunityPopupData } from '../../data/appConsts';
import StyledButton from '../../assets/widgets/StyledButton';
import {
  CalendarClock,
  FolderOpen,
  ShieldCheck,
  TrendingUp,
  Link2,
  CloudLightning,
  Eye,
  PlusCircle,
} from 'lucide-react';
import CardSection from '../common/cardSection'; // Reusable card component
import './opportunityPopupView.css';

interface OpportunityPopupViewProps {
  data: OpportunityPopupData;
}

const OpportunityPopupView: React.FC<OpportunityPopupViewProps> = ({ data }) => {
  return (
    <div className="opportunity-popup-content">
      <div className="opportunity-grid">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <CardSection title="Upcoming Renewals" icon={<CalendarClock size={16} />}>
            <div className="card-list">
              {data.renewals.map((item, idx) => (
                <div key={idx} className="card-item">
                  <div className="card-title">{item.product}</div>
                  <div className="card-info">
                    <span>Stage: {item.stage}</span>
                    <span>Exp: <strong className="exp">{item.expiry}</strong></span>
                    <span>RSM: {item.rsm}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardSection>

          <CardSection title="Upcoming LDOS" icon={<FolderOpen size={16} />}>
            <div className="card-list">
              {data.ldos.map((item, idx) => (
                <div key={idx} className="card-item card-split">
                  <div className="card-left">
                    <div className="card-title">{item.name}</div>
                    <div className="card-info">
                      <span>Expires: <strong className="exp">{item.expires}</strong></span>
                    </div>
                  </div>
                  <div className="card-right">
                    <StyledButton
                      onClick={() => alert(`${item.hasOpportunity ? 'View' : 'Create'} Opportunity for ${item.name}`)}
                    >
                      {item.hasOpportunity ? (
                        <>
                          <Eye size={14} style={{ marginRight: 4 }} />
                          View Opportunity
                        </>
                      ) : (
                        <>
                          <PlusCircle size={14} style={{ marginRight: 4 }} />
                          Create Opportunity
                        </>
                      )}
                    </StyledButton>
                  </div>
                </div>
              ))}
            </div>
          </CardSection>

          <CardSection title="EA (Enterprise Agreements)" icon={<ShieldCheck size={16} />}>
            <div className="card-list">
              {data.eas.map((item, idx) => (
                <div key={idx} className="card-item">
                  <div className="card-title">{item.name}</div>
                  <div className="card-info">
                    <span>Exp: <strong className="exp">{item.expiry}</strong></span>
                    <span>Licenses: {item.licenses.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardSection>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          <CardSection title="Market Surge" icon={<TrendingUp size={16} />}>
            <div className="card-list">
              {data.surgeEvents.map((item, idx) => (
                <div key={idx} className="card-item">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </CardSection>

          {data.showQuoteIntegration && (
            <CardSection title="Quote Integration" icon={<Link2 size={16} />}>
              <p>No quote integrated yet. Link to CCW below:</p>
              <div className="section-footer">
                <StyledButton onClick={() => alert('Linking to CCW...')}>
                  Link to CCW
                </StyledButton>
              </div>
            </CardSection>
          )}

          {data.showServicesAttach && (
            <CardSection title="Services Attach" icon={<CloudLightning size={16} />}>
              <p>No service dollars linked. Open opportunity record below:</p>
              <div className="section-footer">
                <StyledButton onClick={() => alert('Navigating to Opportunity...')}>
                  Link to Opportunity
                </StyledButton>
              </div>
            </CardSection>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpportunityPopupView;
