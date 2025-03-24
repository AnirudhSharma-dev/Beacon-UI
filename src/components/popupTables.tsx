import { Cpu, FileText, Eye } from 'lucide-react';
import { actionsData, mainTableData, opportunityData, moreDetailData } from '../data/appConsts';
import StyledButton from '../assets/widgets/StyledButton';
import MoreDetailView from './popups/moreDetailView';

interface PopupTablesProps {
  activePopup: string | null;
  selectedRow: number | null;
  activeTab: 'account' | 'actions' | 'opportunity';
  closePopup: () => void;
}

function PopupTables({ activePopup, selectedRow, activeTab, closePopup }: PopupTablesProps) {
  return (
    <div>
      {activePopup === 'subTable' && selectedRow !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>
                {activeTab === 'account' ? (
                  <>
                    <Eye size={18} style={{ marginRight: '8px' }} />
                    More Details — Deal #{mainTableData.find(item => item.id === selectedRow)?.dealId || 'None'}
                  </>
                ) : activeTab === 'actions' ? (
                  <>
                    <FileText size={18} style={{ marginRight: '8px' }} />
                    Documents — {actionsData[selectedRow]?.[0]?.event || '—'}
                  </>
                ) : (
                  <>
                    <Cpu size={18} style={{ marginRight: '8px' }} />
                    Opportunity — {mainTableData.find(item => item.id === selectedRow)?.action || '—'}
                  </>
                )}
              </h2>
              <button className="close-button" onClick={closePopup}>×</button>
            </div>

            <div className="tab-content">
              {/* Account → More Details */}
              {activeTab === 'account' && moreDetailData[selectedRow] && (
                <MoreDetailView data={moreDetailData[selectedRow]} />
              )}

              {/* Actions → Documents */}
              {activeTab === 'actions' && actionsData[selectedRow] && (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {actionsData[selectedRow].map((action, index) => (
                      <tr key={index}>
                        <td>{action.event}</td>
                        <td>{action.type}</td>
                        <td>{action.date}</td>
                        <td>{action.summary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* Opportunity → Highlights */}
              {activeTab === 'opportunity' && opportunityData[selectedRow] && (
                <div className="opportunity-card">
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
