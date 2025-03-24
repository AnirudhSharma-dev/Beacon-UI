import { useState } from 'react';
import './App.css';
import {
  RefreshCw,
  Shield,
  Network,
  Activity,
} from 'lucide-react';

import PopupTables from './components/popupTables';
import MainTable from './components/mainTable';
import BasicTable from './assets/widgets/BasicTable';
import { columns, data } from './data/basicTableConst';
import { mainTableData } from './data/appConsts';

function App() {
  const [activePopup, setActivePopup] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [activePopupTab, setActivePopupTab] = useState<'account' | 'actions' | 'opportunity' | null>(null);

  const [hiddenRowIds, setHiddenRowIds] = useState<number[]>([]);
  const [moreActionsOpen, setMoreActionsOpen] = useState<boolean>(false);

  const openPopup = (rowId: number, tab: 'account' | 'actions' | 'opportunity') => {
    if (activePopup) return;
    setSelectedRow(rowId);
    setActivePopupTab(tab);
    setActivePopup(true);
  };

  const closePopup = () => {
    setActivePopup(false);
    setSelectedRow(null);
    setActivePopupTab(null);
  };

  const handleHideRow = (rowId: number) => {
    if (!hiddenRowIds.includes(rowId)) {
      setHiddenRowIds([...hiddenRowIds, rowId]);
    }
  };

  const unhideAllRows = () => {
    setHiddenRowIds([]);
    setMoreActionsOpen(false);
  };

  const renderActionIcon = (iconType: string) => {
    switch (iconType) {
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

  return (
    <div className="app-container">
      <MainTable
        openPopup={openPopup}
        renderActionIcon={renderActionIcon}
        activePopup={activePopup ? 'subTable' : null}
        hiddenRowIds={hiddenRowIds}
        onHideRow={handleHideRow}
        onOpenMoreActions={() => setMoreActionsOpen(true)}
      />

      <PopupTables
        activePopup={activePopup ? 'subTable' : null}
        selectedRow={selectedRow}
        activeTab={activePopupTab || 'account'}
        closePopup={closePopup}
      />

      {/* More Actions Popup */}
      {moreActionsOpen && (
        <div className="popup-overlay" onClick={() => setMoreActionsOpen(false)}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>More Actions</h2>
              <button className="close-button" onClick={() => setMoreActionsOpen(false)}>×</button>
            </div>
            <div className="tab-content">
              <h4>Hidden Rows</h4>
              {hiddenRowIds.length === 0 ? (
                <p>No rows are hidden.</p>
              ) : (
                <ul style={{ paddingLeft: '20px' }}>
                  {hiddenRowIds.map((id) => {
                    const row = mainTableData.find(row => row.id === id);
                    return (
                      <li key={id} style={{ marginBottom: '6px' }}>
                        {row?.name || `Row #${id}`}
                        <button
                          style={{
                            marginLeft: '10px',
                            backgroundColor: '#e8f0fe',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            fontSize: '12px',
                            cursor: 'pointer'
                          }}
                          onClick={() => setHiddenRowIds(hiddenRowIds.filter(hid => hid !== id))}
                        >
                          Unhide
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}

              {hiddenRowIds.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                  <button
                    className="link-button"
                    onClick={unhideAllRows}
                    style={{ fontWeight: 600 }}
                  >
                    Unhide All Rows
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <BasicTable columns={columns} data={data} />
    </div>
  );
}

export default App;
