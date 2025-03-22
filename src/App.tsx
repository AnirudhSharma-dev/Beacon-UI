import React, { useState } from 'react';
import './App.css';
// Import icons from a popular icon library
import { 
  Bell, 
  RefreshCw, 
  Shield, 
  Network, 
  Server, 
  Database,
  Zap,
  ShoppingCart,
  Activity,
  Cpu,
  CheckCircle,
  Clock,
  Circle,
  AlertCircle
} from 'lucide-react';

function App() {
  // Updated sample data based on the image
  const mainTableData = [
    { id: 1, name: "Well's Dairy, Inc.", action: "Renewal", dealId: "55827996", hide: false, icon: "security" },
    { id: 2, name: "NHI Corporation", action: "New Opportunity", dealId: "Create New", hide: false, icon: "network" },
    { id: 3, name: "Grand Forks Public", action: "LDOS", dealId: "55924344", hide: false, icon: "refresh" },
    { id: 4, name: "Vermeer", action: "Quote", dealId: "Create New", hide: false, icon: "default" },
    { id: 5, name: "Altra Hospital", action: "Integration", dealId: "55924344", hide: false, icon: "default" },
    { id: 6, name: "Hy-vee, Inc", action: "White Space", dealId: "55924344", hide: false, icon: "default" },
    { id: 7, name: "Vermeer", action: "Past Due", dealId: "Create New", hide: false, icon: "default" },
    { id: 8, name: "Purfoodz, Llc", action: "Renewal", dealId: "55924344", hide: false, icon: "default" },
    { id: 9, name: "Vermeer (Primary)", action: "LDOS", dealId: "55924344", hide: false, icon: "default" },
  ];

  // Sample data for the account tab
  const accountData = {
    1: {
      name: "Well's Dairy, Inc.",
      currentYtdSpend: "$430k",
      yoyGrowth: "+11%",
      primarySE: "Compute; NX",
      preferredPartner: "CDW",
      indicators: ["Current Active EA", "Upcoming Renewal", "Marketing surge", "Low wallet pen"]
    },
    2: {
      name: "NHI Corporation",
      currentYtdSpend: "$280k",
      yoyGrowth: "+5%",
      primarySE: "Network; SaaS",
      preferredPartner: "SHI",
      indicators: ["New account", "Security interest"]
    },
    3: {
      name: "Grand Forks Public",
      currentYtdSpend: "$520k",
      yoyGrowth: "-2%",
      primarySE: "Hardware; Security",
      preferredPartner: "Splunk",
      indicators: ["Hardware refresh needed", "Budget approved"]
    },
    // Additional accounts data for the rest of the companies
    4: {
      name: "Vermeer",
      currentYtdSpend: "$310k",
      yoyGrowth: "+3%",
      primarySE: "IoT; Edge",
      preferredPartner: "Insight",
      indicators: ["Manufacturing focus", "Expansion opportunity"]
    },
    5: {
      name: "Altra Hospital",
      currentYtdSpend: "$620k",
      yoyGrowth: "+8%",
      primarySE: "Healthcare; Security",
      preferredPartner: "CDW",
      indicators: ["HIPAA compliance", "Cloud migration"]
    },
    6: {
      name: "Hy-vee, Inc",
      currentYtdSpend: "$480k",
      yoyGrowth: "+6%",
      primarySE: "Retail; Data",
      preferredPartner: "SHI",
      indicators: ["AI interest", "Competitive account"]
    },
    7: {
      name: "Vermeer",
      currentYtdSpend: "$310k",
      yoyGrowth: "+3%",
      primarySE: "IoT; Edge",
      preferredPartner: "Insight",
      indicators: ["Secondary location", "New project"]
    },
    8: {
      name: "Purfoodz, Llc",
      currentYtdSpend: "$180k",
      yoyGrowth: "+15%",
      primarySE: "Food Tech; Analytics",
      preferredPartner: "Arrow",
      indicators: ["Growing account", "Tech adoption"]
    },
    9: {
      name: "Vermeer (Primary)",
      currentYtdSpend: "$450k",
      yoyGrowth: "+7%",
      primarySE: "IoT; Edge",
      preferredPartner: "Insight",
      indicators: ["HQ location", "Strategic account"]
    }
  };

  // Sample data for the actions tab - based on "Actions - [Security EA Renewal]" in the image
  const actionsData = {
    1: [
      { detail: "Duo; ThousandEyes", event: "EA Renewal", amount: "$1,500k", expansionOption: "No Services; Splunk" }
    ],
    2: [
      { detail: "Networking Suite", event: "Initial Install", amount: "$280k", expansionOption: "Security Add-on" }
    ],
    3: [
      { detail: "Hardware; Splunk", event: "Refresh", amount: "$350k", expansionOption: "Managed Services" }
    ],
    // Other actions for remaining companies
    4: [
      { detail: "IoT Platform", event: "Expansion", amount: "$125k", expansionOption: "Edge Computing" }
    ],
    5: [
      { detail: "Healthcare Security", event: "Compliance Update", amount: "$220k", expansionOption: "Cloud Backup" }
    ],
    6: [
      { detail: "Retail Analytics", event: "New Implementation", amount: "$175k", expansionOption: "AI Insights" }
    ],
    7: [
      { detail: "Secondary Location", event: "New Setup", amount: "$95k", expansionOption: "Integration Services" }
    ],
    8: [
      { detail: "Food Safety Tech", event: "Initial Deployment", amount: "$120k", expansionOption: "Analytics Package" }
    ],
    9: [
      { detail: "Primary Infrastructure", event: "Upgrade", amount: "$210k", expansionOption: "Managed Services" }
    ]
  };

  // Sample data for the opportunity tab - based on "Opportunity - [Security EA Refresh - 55827996]" in the image
  const opportunityData = {
    1: {
      technology: "DUO; NGFW",
      stage: "5",
      dollarTier: "$450k",
      linked: "Yes",
      strategic: true,
      marketShare: "65%",
      highlights: ["Clickable", "Takes AM directly to where they can take actions"]
    },
    2: {
      technology: "SD-WAN; WiFi",
      stage: "3",
      dollarTier: "$280k",
      linked: "No",
      strategic: false,
      marketShare: "28%",
      highlights: ["New opportunity", "Competitive situation"]
    },
    3: {
      technology: "Hardware; Splunk",
      stage: "4",
      dollarTier: "$350k",
      linked: "Yes",
      strategic: true,
      marketShare: "42%",
      highlights: ["Refresh cycle", "Budget approved"]
    },
    // Other opportunities for remaining companies
    4: {
      technology: "IoT; Edge",
      stage: "2",
      dollarTier: "$125k",
      linked: "No",
      strategic: false,
      marketShare: "15%",
      highlights: ["New territory", "Competitive situation"]
    },
    5: {
      technology: "Security; Cloud",
      stage: "4",
      dollarTier: "$220k",
      linked: "Yes",
      strategic: true,
      marketShare: "55%",
      highlights: ["Compliance driven", "Executive support"]
    },
    6: {
      technology: "Analytics; AI",
      stage: "3",
      dollarTier: "$175k",
      linked: "No",
      strategic: true,
      marketShare: "30%",
      highlights: ["Innovation focus", "Competitive situation"]
    },
    7: {
      technology: "Network; IoT",
      stage: "2",
      dollarTier: "$95k",
      linked: "No",
      strategic: false,
      marketShare: "22%",
      highlights: ["Expansion project", "Budget pending"]
    },
    8: {
      technology: "Analytics; Security",
      stage: "3",
      dollarTier: "$120k",
      linked: "Yes",
      strategic: false,
      marketShare: "38%",
      highlights: ["Technology upgrade", "ROI focused"]
    },
    9: {
      technology: "Edge; Security",
      stage: "4",
      dollarTier: "$210k",
      linked: "Yes",
      strategic: true,
      marketShare: "48%",
      highlights: ["Strategic initiative", "Executive sponsored"]
    }
  };

  // State for managing popups
  const [activePopup, setActivePopup] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('account');

  // Function to open popup
  const openPopup = (rowId, tab) => {
    setSelectedRow(rowId);
    setActiveTab(tab);
    setActivePopup('subTable');
  };

  // Function to close popup
  const closePopup = () => {
    setActivePopup(null);
    setSelectedRow(null);
  };

  // Function to render appropriate icon based on action type
  const renderActionIcon = (iconType) => {
    switch(iconType) {
      case 'security':
        return <Shield className="action-icon" size={16} />;
      case 'network':
        return <Network className="action-icon" size={16} />;
      case 'refresh':
        return <RefreshCw className="action-icon" size={16} />;
      default:
        return <Activity className="action-icon" size={16} />;
    }
  };

  // Function to render step status icon
  const renderStepIcon = (status) => {
    switch(status) {
      case 'complete':
        return <CheckCircle className="step-icon" size={18} />;
      case 'active':
        return <Clock className="step-icon" size={18} />;
      default:
        return <Circle className="step-icon" size={18} />;
    }
  };

  // Function to determine growth icon/color
  const renderGrowthIndicator = (growth) => {
    const value = parseFloat(growth);
    if (value > 0) {
      return <span className="growth positive">+{Math.abs(value)}% ↑</span>;
    } else if (value < 0) {
      return <span className="growth negative">-{Math.abs(value)}% ↓</span>;
    }
    return <span className="growth neutral">{value}%</span>;
  };

  return (
    <div className="app-container">
      <h1>Next Best Actions</h1>
      <div className="goal-container">
        <h2>Goal</h2>
        <p>Leverage existing AI insights to provide sellers and leaders recommendations on which accounts / technologies to focus sales efforts on.</p>
      </div>

      {/* Main Table */}
      <div className="table-container">
        <div className="table-header">
          <h2>Next Best Actions</h2>
          <div className="display-count">
            <span>Display</span>
            <span className="count-badge">10</span>
            <span>results</span>
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th width="50">Serial No.</th>
              <th>Account</th>
              <th>Compiling Event</th>
              <th>Existing Deal ID</th>
              <th>Next Steps</th>
            </tr>
          </thead>
          <tbody>
            {mainTableData.map((row, i) => (
              <tr key={row.id}>
                <td>
                  <span className="plain-text">{i+1}</span>
                </td>
                <td>
                  <span className="plain-text">{row.name}</span>
                </td>
                <td>
                  <div className="action-display">
                    {/* {renderActionIcon(row.icon)} */}
                    <span>{row.action}</span>
                  </div>
                </td>
                <td>
                  {row.dealId === "Create New" ? (
                    <div className="deal-id-display">
                      <Zap size={14} className="icon-left" />
                      Create New
                    </div>
                  ) : (
                    <div className="deal-id-display">
                      <Database size={14} className="icon-left" />
                      {row.dealId}
                    </div>
                  )}
                </td>
                <td className="next-steps">
                  <div className="step-indicators">
                    <span 
                      className={`step ${row.id % 3 === 0 ? 'step-complete' : 'step-active'}`}
                      onClick={() => openPopup(row.id, 'account')}
                      style={{ cursor: 'pointer' }}
                    >
                      {row.id % 3 === 0 ? <CheckCircle size={16} /> : 1}
                    </span>
                    <span 
                      className={`step ${row.id % 3 === 0 ? 'step-active' : 'step-pending'}`}
                      onClick={() => openPopup(row.id, 'actions')}
                      style={{ cursor: 'pointer' }}
                    >
                      {row.id % 3 === 0 ? 2 : <Clock size={16} />}
                    </span>
                    <span 
                      className="step step-pending"
                      onClick={() => openPopup(row.id, 'opportunity')}
                      style={{ cursor: 'pointer' }}
                    >
                      <AlertCircle size={16} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-footer">
          <button className="more-actions-button">
            <Bell size={14} className="icon-left" />
            More Actions
          </button>
        </div>
      </div>

      {/* Popup for Sub-Tables */}
      {activePopup === 'subTable' && selectedRow && (
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

export default App;