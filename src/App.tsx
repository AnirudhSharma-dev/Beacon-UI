import { useState } from 'react';
import './App.css';
import {
  RefreshCw,
  Shield,
  Network,
  Activity,
} from 'lucide-react';
import StyledButton from './assets/widgets/StyledButton';
import PopupTables from './components/popupTables';
import MainTable from './components/mainTable';

function App() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('account');

  const openPopup = (rowId: number, tab: string) => {
    setSelectedRow(rowId);
    setActiveTab(tab);
    setActivePopup('subTable');
  };

  const closePopup = () => {
    setActivePopup(null);
    setSelectedRow(null);
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
      <h1>Next Best Actions</h1>
      <div className="goal-container">
        <h2>Goal</h2>
        <p>Leverage existing AI insights to provide sellers and leaders recommendations on which accounts / technologies to focus sales efforts on.</p>
      </div>

      <StyledButton
        variant="primary"
        onClick={() => console.log('Create a pitch clicked')}
        style={{ marginBottom: '16px' }}
      >
        Create a pitch for [Equinix Opportunity Name]
      </StyledButton>

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