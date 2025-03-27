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
// import BasicTable from './assets/widgets/basicTable';
// import { columns, data } from './data/basicTableConst';
import MoreActionsPopup from './components/popups/moreActionsPopup';

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
        <MoreActionsPopup
          hiddenRowIds={hiddenRowIds}
          onUnhideRow={(id) => setHiddenRowIds(hiddenRowIds.filter(h => h !== id))}
          onUnhideAll={unhideAllRows}
          onClose={() => setMoreActionsOpen(false)}
        />
      )}

      {/* <BasicTable columns={columns} data={data} /> */}
    </div>
  );
}

export default App;
