import React from 'react';
import { Zap, Database, Bell, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { mainTableData } from '../data/appConsts';

interface MainTableProps {
  openPopup: (rowId: number, tab: string) => void;
  renderActionIcon: (iconType: string) => JSX.Element;
}

function MainTable({ openPopup, renderActionIcon }: MainTableProps) {
  return (
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mainTableData.map((row, i) => (
            <tr key={row.id}>
              <td>
                <span className="plain-text">{i + 1}</span>
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
  );
}

export default MainTable;