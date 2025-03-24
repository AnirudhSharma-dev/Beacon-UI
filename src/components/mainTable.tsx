import { useState } from 'react';
import {
  Zap,
  Database,
  Bell,
  ChevronLeft,
  ChevronRight,
  FileText,
  CalendarClock,
  Eye,
  EyeOff,
} from 'lucide-react';
import { mainTableData } from '../data/appConsts';
import StyledButton from '../assets/widgets/StyledButton';

interface MainTableProps {
  openPopup: (rowId: number, tab: 'account' | 'actions' | 'opportunity') => void;
  renderActionIcon: (iconType: string) => JSX.Element;
  activePopup: string | null;
  hiddenRowIds: number[];
  onHideRow: (rowId: number) => void;
  onOpenMoreActions: () => void;
}

function MainTable({
  openPopup,
  renderActionIcon,
  activePopup,
  hiddenRowIds,
  onHideRow,
  onOpenMoreActions,
}: MainTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = mainTableData.length;

  const visibleData = mainTableData.filter(row => !hiddenRowIds.includes(row.id));
  const totalItems = visibleData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = visibleData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Next Best Actions</h2>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: '10px' }}>#</th>
            <th>Account</th>
            <th>Compiling Event</th>
            <th>Existing Deal ID</th>
            <th style={{ width: '180px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, i) => (
            <tr key={row.id}>
              <td>{startIndex + i + 1}</td>
              <td>{row.name}</td>
              <td>
                <div className="action-display">
                  {renderActionIcon(row.icon)}
                  <span style={{ marginLeft: '5px' }}>{row.action}</span>
                </div>
              </td>
              <td>
                {row.dealId === 'Create New' ? (
                  <div className="deal-id-display">
                    <Zap size={14} className="icon-left" />
                    <span style={{ marginLeft: '5px' }}>Create New</span>
                  </div>
                ) : (
                  <div className="deal-id-display">
                    <Database size={14} className="icon-left" />
                    <span style={{ marginLeft: '5px' }}>{row.dealId}</span>
                  </div>
                )}
              </td>
              <td>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span title="More Details">
                    <Eye
                      size={18}
                      className="action-icon"
                      style={{ cursor: activePopup ? 'default' : 'pointer' }}
                      onClick={() => !activePopup && openPopup(row.id, 'account')}
                    />
                  </span>
                  <span title="Documents">
                    <FileText
                      size={18}
                      className="action-icon"
                      style={{ cursor: activePopup ? 'default' : 'pointer' }}
                      onClick={() => !activePopup && openPopup(row.id, 'actions')}
                    />
                  </span>
                  <span title="Future Plans">
                    <CalendarClock
                      size={18}
                      className="action-icon"
                      style={{ cursor: activePopup ? 'default' : 'pointer' }}
                      onClick={() => !activePopup && openPopup(row.id, 'opportunity')}
                    />
                  </span>
                  <span title="Hide Row">
                    <EyeOff
                      size={18}
                      className="action-icon"
                      style={{ cursor: 'pointer' }}
                      onClick={() => onHideRow(row.id)}
                    />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <StyledButton className="more-actions-button" onClick={onOpenMoreActions}>
          <Bell size={14} style={{ marginRight: '8px' }} />
          More Actions
        </StyledButton>

        <div className="elegant-pagination">
          <StyledButton
            variant="secondary"
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </StyledButton>

          <div className="pagination-info">
            <span className="display-text">Displaying</span>
            <span className="count-badge">{currentData.length}</span>
            <span className="display-text">
              of {visibleData.length} items | (Page {currentPage} of {totalPages})
            </span>
          </div>

          <StyledButton
            variant="secondary"
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default MainTable;
