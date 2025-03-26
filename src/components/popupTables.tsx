import { Cpu, FileText, Eye } from 'lucide-react';
import { actionsData, mainTableData, opportunityData, moreDetailData,documentPopupData } from '../data/appConsts';
import MoreDetailView from './popups/moreDetailView';
import DocumentsPopupView from './popups/documentsPopupView';
import OpportunityPopupView from './popups/opportunityPopupView';
import './popupTables.css';

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
              {activeTab === 'actions' && selectedRow !== null && (
              <DocumentsPopupView data={documentPopupData[selectedRow]} />
              )}

              {/* Opportunity → Highlights */}
              {activeTab === 'opportunity' && selectedRow !== null && (
              <OpportunityPopupView data={opportunityData[selectedRow]} />
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupTables;
