import React from 'react';
import { Activity, Cpu, ShoppingCart, Server, RefreshCw, Database, Zap } from 'lucide-react';
import { accountData, actionsData, mainTableData, opportunityData } from '../data/appConsts';

interface PopupTablesProps {
  activePopup: string | null;
  selectedRow: number | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  closePopup: () => void;
}

function PopupTables({ activePopup, selectedRow, activeTab, setActiveTab, closePopup }: PopupTablesProps) {
  return (
    <div>
      {activePopup === 'subTable' && selectedRow !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={e => e.stopPropagation()}>
            <div className="popup-header">
              <h2>
                {activeTab === 'account' ? (
                  <>
                    <ShoppingCart size={18} className="icon-left" />
                    Account — [{accountData[selectedRow]?.name}]
                  </>
                ) : activeTab === 'actions' ? (
                  <>
                    <Activity size={18} className="icon-left" />
                    Actions — [{actionsData[selectedRow]?.[0]?.event}]
                  </>
                ) : (
                  <>
                    <Cpu size={18} className="icon-left" />
                    Opportunity — [{mainTableData.find(item => item.id === selectedRow)?.action} - {mainTableData.find(item => item.id === selectedRow)?.dealId}]
                  </>
                )}
              </h2>
              <button className="close-button" onClick={closePopup}>×</button>
            </div>
            
            <div className="tab-navigation">
              <button 
                className={`tab-button ${activeTab === 'account' ? 'active' : ''}`}
                onClick={() => setActiveTab('account')}
              >
                <ShoppingCart size={16} className="icon-left" />
                Account
              </button>
              <button 
                className={`tab-button ${activeTab === 'actions' ? 'active' : ''}`}
                onClick={() => setActiveTab('actions')}
              >
                <Activity size={16} className="icon-left" />
                Actions
              </button>
              <button 
                className={`tab-button ${activeTab === 'opportunity' ? 'active' : ''}`}
                onClick={() => setActiveTab('opportunity')}
              >
                <Cpu size={16} className="icon-left" />
                Opportunity
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'account' && (
                <div className="account-card">
                  <div className="account-grid">
                    <div className="account-item">
                      <div className="account-label">Current Ytd. Spend (vs. 3 yr avg YTD)</div>
                      <div className="account-value">
                        {accountData[selectedRow]?.currentYtdSpend} 
                        <span className={`growth ${parseFloat(accountData[selectedRow]?.yoyGrowth) > 0 ? 'positive' : 'negative'}`}>
                          {accountData[selectedRow]?.yoyGrowth}
                        </span>
                      </div>
                    </div>
                    <div className="account-item">
                      <div className="account-label">Primary SE(s)</div>
                      <div className="account-value">{accountData[selectedRow]?.primarySE}</div>
                    </div>
                    <div className="account-item">
                      <div className="account-label">Preferred Partner</div>
                      <div className="account-value">{accountData[selectedRow]?.preferredPartner}</div>
                    </div>
                    <div className="account-item">
                      <div className="account-label">Indicators</div>
                      <div className="account-indicators">
                        <div className="indicator-circles">
                          <span className="circle active"></span>
                          <span className="circle"></span>
                          <span className="circle active"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="indicator-examples">
                    <h4>Indicator Examples:</h4>
                    <ul>
                      {accountData[selectedRow]?.indicators.map((indicator, index) => (
                        <li key={index}>{indicator}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'actions' && (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Detail</th>
                      <th>Event(s)</th>
                      <th>$</th>
                      <th>Best Expansion Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {actionsData[selectedRow]?.map((action, index) => (
                      <tr key={index}>
                        <td>
                          <Server size={16} className="icon-left" />
                          {action.detail}
                        </td>
                        <td>
                          <RefreshCw size={16} className="icon-left" />
                          {action.event}
                        </td>
                        <td>
                          <Database size={16} className="icon-left" />
                          {action.amount}
                        </td>
                        <td>
                          <Zap size={16} className="icon-left" />
                          {action.expansionOption}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'opportunity' && (
                <div className="opportunity-card">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Technology</th>
                        <th>Stage</th>
                        <th>$ Tier</th>
                        <th>$ Min</th>
                        <th>Linked?</th>
                        <th>Strategic?</th>
                        <th>MS/SPEC</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Server size={16} className="icon-left" />
                          {opportunityData[selectedRow]?.technology}
                        </td>
                        <td>{opportunityData[selectedRow]?.stage}</td>
                        <td>{opportunityData[selectedRow]?.dollarTier}</td>
                        <td>$</td>
                        <td>
                          <div className="indicator-circles">
                            <span className={`circle ${opportunityData[selectedRow]?.linked === "Yes" ? "active" : ""}`}></span>
                          </div>
                        </td>
                        <td>
                          <div className="indicator-circles">
                            <span className={`circle ${opportunityData[selectedRow]?.strategic ? "active" : ""}`}></span>
                          </div>
                        </td>
                        <td>{opportunityData[selectedRow]?.marketShare}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="opportunity-highlights">
                    <h4>Take Action Highlights:</h4>
                    <ul>
                      {opportunityData[selectedRow]?.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
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