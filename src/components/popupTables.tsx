import React from 'react';
import { Activity, Cpu, ShoppingCart, Server, RefreshCw, Database, Zap } from 'lucide-react';
import { accountData, actionsData, mainTableData, opportunityData } from '../data/appConsts';
import StyledButton from '../assets/widgets/StyledButton';

interface PopupTablesProps {
  activePopup: string | null;
  selectedRow: number | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  closePopup: () => void;
}

function PopupTables({ activePopup, selectedRow, activeTab, setActiveTab, closePopup }: PopupTablesProps) {
  // Custom tab button style for the tab navigation
  const tabButtonStyle = (isActive: boolean) => ({
    position: 'relative',
    padding: '12px 20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: isActive ? '#1a73e8' : '#757575',
    fontWeight: isActive ? 500 : 400,
    borderBottom: isActive ? '2px solid #1a73e8' : '2px solid transparent',
  });

  return (
    <div>
      {activePopup === 'subTable' && selectedRow !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={e => e.stopPropagation()}>
            <div className="popup-header">
              <h2>
                {activeTab === 'account' ? (
                  <>
                    <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                    Account — [{accountData[selectedRow as keyof typeof accountData]?.name}]
                  </>
                ) : activeTab === 'actions' ? (
                  <>
                    <Activity size={18} style={{ marginRight: '8px' }} />
                    Actions — [{actionsData[selectedRow as keyof typeof actionsData]?.[0]?.event}]
                  </>
                ) : (
                  <>
                    <Cpu size={18} style={{ marginRight: '8px' }} />
                    Opportunity — [{mainTableData.find(item => item.id === selectedRow)?.action} - {mainTableData.find(item => item.id === selectedRow)?.dealId}]
                  </>
                )}
              </h2>
              <button className="close-button" onClick={closePopup}>×</button>
            </div>
            
            <div className="tab-navigation">
              <button 
                style={tabButtonStyle(activeTab === 'account') as React.CSSProperties}
                onClick={() => setActiveTab('account')}
              >
                <ShoppingCart size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Account
              </button>
              <button 
                style={tabButtonStyle(activeTab === 'actions') as React.CSSProperties}
                onClick={() => setActiveTab('actions')}
              >
                <Activity size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Actions
              </button>
              <button 
                style={tabButtonStyle(activeTab === 'opportunity') as React.CSSProperties}
                onClick={() => setActiveTab('opportunity')}
              >
                <Cpu size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Opportunity
              </button>
            </div>

            <div className="tab-content">
              {/* Account tab content */}
              {activeTab === 'account' && (
                /* Account content is unchanged */
                <div className="account-card">
                  {/* ... existing account content ... */}
                </div>
              )}

              {/* Actions tab content */}
              {activeTab === 'actions' && (
                /* Actions content is unchanged */
                <table className="data-table">
                  {/* ... existing actions content ... */}
                </table>
              )}

              {/* Opportunity tab content */}
              {activeTab === 'opportunity' && (
                <div className="opportunity-card">
                  {/* ... existing opportunity content ... */}
                  <div className="opportunity-highlights">
                    <h4>Take Action Highlights:</h4>
                    <ul>
                      {opportunityData[selectedRow]?.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                      <StyledButton variant="primary">
                        Create a pitch for [{opportunityData[selectedRow]?.technology}]
                      </StyledButton>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupTables;