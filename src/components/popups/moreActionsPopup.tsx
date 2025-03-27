import React from 'react';
import { Eye } from 'lucide-react';
import { mainTableData } from '../../data/appConsts';
import './MoreActionsPopup.css';

interface MoreActionsPopupProps {
  hiddenRowIds: number[];
  onUnhideRow: (rowId: number) => void;
  onUnhideAll: () => void;
  onClose: () => void;
}

const MoreActionsPopup: React.FC<MoreActionsPopupProps> = ({
  hiddenRowIds,
  onUnhideRow,
  onUnhideAll,
  onClose
}) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container more-actions-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>More Actions</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="tab-content">
          <h4>Hidden Rows</h4>

          {hiddenRowIds.length === 0 ? (
            <p>No rows are hidden.</p>
          ) : (
            <ul className="hidden-list">
              {hiddenRowIds.map((id) => {
                const row = mainTableData.find(row => row.id === id);
                return (
                  <li key={id}>
                    {row?.name || `Row #${id}`}
                    <button
                      className="unhide-icon-btn"
                      onClick={() => onUnhideRow(id)}
                      title="Unhide"
                    >
                      <Eye size={16} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {hiddenRowIds.length > 0 && (
            <div className="unhide-all-wrap">
              <button className="link-button" onClick={onUnhideAll}>
                Unhide All Rows
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreActionsPopup;
