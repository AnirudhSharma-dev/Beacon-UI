import React, { JSX, useState } from 'react';
import { Zap, Database, Bell, CheckCircle, Clock, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { mainTableData } from '../data/appConsts';
import StyledButton from '../assets/widgets/StyledButton';

interface MainTableProps {
  openPopup: (rowId: number, tab: string) => void;
  renderActionIcon: (iconType: string) => JSX.Element;
}

function MainTable({ openPopup, renderActionIcon }: MainTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Calculate pagination
  const totalItems = mainTableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = mainTableData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Next Best Actions</h2>
        <div className="display-count">
          <span>Display</span>
          <span className="count-badge">{itemsPerPage}</span>
          <span>results</span>
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: '50px' }}>Serial No.</th>
            <th>Account</th>
            <th>Compiling Event</th>
            <th>Existing Deal ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, i) => (
            <tr key={row.id}>
              <td>
                <span className="plain-text">{startIndex + i + 1}</span>
              </td>
              <td>
                <span className="plain-text">{row.name}</span>
              </td>
              <td>
                <div className="action-display">
                  {renderActionIcon(row.icon)}
                  <span>{row.action}</span>
                </div>
              </td>
              <td>
                {row.dealId === "Create New" ? (
                  <div className="deal-id-display">
                    <Zap size={14} className="icon-left" />
                    <span>Create New</span>
                    {/* <StyledButton variant="secondary" className="create-new-button">
                      Create New
                    </StyledButton> */}
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
        <StyledButton className="more-actions-button">
          <Bell size={14} style={{ marginRight: '8px' }} />
          More Actions
        </StyledButton>
        <div className="pagination-controls">
          <StyledButton 
            variant="secondary"
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </StyledButton>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
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