import React, { useState } from 'react';
import './App.css';
import { 
  Bell, 
  RefreshCw, 
  Shield, 
  Network, 
  Activity,
} from 'lucide-react';
import MainTable from './components/mainTable';
import PopupTables from './components/popupTables';

function App() {
  const [activePopup, setActivePopup] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('account');

  const openPopup = (rowId, tab) => {
    setSelectedRow(rowId);
    setActiveTab(tab);
    setActivePopup('subTable');
  };

  const closePopup = () => {
    setActivePopup(null);
    setSelectedRow(null);
  };

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

  return (
    <div className="app-container">
      <h1>Next Best Actions</h1>
      <div className="goal-container">
        <h2>Goal</h2>
        <p>Leverage existing AI insights to provide sellers and leaders recommendations on which accounts / technologies to focus sales efforts on.</p>
      </div>

      <MainTable 
        openPopup={openPopup}
        renderActionIcon={renderActionIcon}
      />

      <PopupTables 
        activePopup={activePopup}
        selectedRow={selectedRow}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        closePopup={closePopup}
      />
    </div>
  );
}

export default App;