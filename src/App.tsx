import React, { useState } from 'react';
import './App.css';

function App() {
  // Sample data for the main table
  const mainTableData = [
    { id: 1, name: 'Project Alpha', status: 'Active', owner: 'John Doe', deadline: '2025-04-15' },
    { id: 2, name: 'Project Beta', status: 'Pending', owner: 'Jane Smith', deadline: '2025-05-20' },
    { id: 3, name: 'Project Gamma', status: 'Completed', owner: 'Mike Johnson', deadline: '2025-03-10' },
    { id: 4, name: 'Project Delta', status: 'Active', owner: 'Sarah Williams', deadline: '2025-06-05' },
  ];

  // Sample data for the sub-tables
  const tasksData = {
    1: [
      { id: 101, task: 'Design UI', assignee: 'Lisa K.', priority: 'High', completed: '30%' },
      { id: 102, task: 'Backend API', assignee: 'Tom B.', priority: 'Medium', completed: '70%' },
    ],
    2: [
      { id: 201, task: 'Market Research', assignee: 'Alex M.', priority: 'Medium', completed: '80%' },
      { id: 202, task: 'Product Mockups', assignee: 'Samantha P.', priority: 'Low', completed: '20%' },
    ],
    3: [
      { id: 301, task: 'Final Testing', assignee: 'David L.', priority: 'High', completed: '100%' },
      { id: 302, task: 'Documentation', assignee: 'Rachel G.', priority: 'Medium', completed: '100%' },
    ],
    4: [
      { id: 401, task: 'Initial Setup', assignee: 'Kevin H.', priority: 'High', completed: '90%' },
      { id: 402, task: 'Database Design', assignee: 'Olivia T.', priority: 'Medium', completed: '40%' },
    ],
  };

  const teamData = {
    1: [
      { id: 1001, member: 'Lisa K.', role: 'UI Designer', experience: '3 years' },
      { id: 1002, member: 'Tom B.', role: 'Backend Dev', experience: '5 years' },
      { id: 1003, member: 'Mark D.', role: 'Project Manager', experience: '7 years' },
    ],
    2: [
      { id: 2001, member: 'Alex M.', role: 'Marketing', experience: '4 years' },
      { id: 2002, member: 'Samantha P.', role: 'Designer', experience: '2 years' },
    ],
    3: [
      { id: 3001, member: 'David L.', role: 'QA Engineer', experience: '6 years' },
      { id: 3002, member: 'Rachel G.', role: 'Technical Writer', experience: '3 years' },
    ],
    4: [
      { id: 4001, member: 'Kevin H.', role: 'DevOps', experience: '5 years' },
      { id: 4002, member: 'Olivia T.', role: 'Database Admin', experience: '8 years' },
    ],
  };

  const budgetData = {
    1: [
      { id: 10001, category: 'Development', allocated: '$50,000', spent: '$32,000', remaining: '$18,000' },
      { id: 10002, category: 'Design', allocated: '$25,000', spent: '$15,000', remaining: '$10,000' },
      { id: 10003, category: 'Marketing', allocated: '$20,000', spent: '$5,000', remaining: '$15,000' },
    ],
    2: [
      { id: 20001, category: 'Research', allocated: '$30,000', spent: '$28,000', remaining: '$2,000' },
      { id: 20002, category: 'Development', allocated: '$40,000', spent: '$10,000', remaining: '$30,000' },
    ],
    3: [
      { id: 30001, category: 'Development', allocated: '$45,000', spent: '$45,000', remaining: '$0' },
      { id: 30002, category: 'Testing', allocated: '$15,000', spent: '$15,000', remaining: '$0' },
    ],
    4: [
      { id: 40001, category: 'Infrastructure', allocated: '$60,000', spent: '$40,000', remaining: '$20,000' },
      { id: 40002, category: 'Development', allocated: '$35,000', spent: '$15,000', remaining: '$20,000' },
    ],
  };

  // State for managing popups
  const [activePopup, setActivePopup] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('tasks');

  // Function to open popup
  const openPopup = (rowId, tab) => {
    setSelectedRow(rowId);
    setActiveTab(tab);
    setActivePopup('subTable');
  };

  // Function to close popup
  const closePopup = () => {
    setActivePopup(null);
    setSelectedRow(null);
  };

  return (
    <div className="app-container">
      <h1>Project Management Dashboard</h1>

      {/* Main Table */}
      <div className="table-container">
        <h2>Projects</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mainTableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>
                  <span className={`status-badge ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.owner}</td>
                <td>{row.deadline}</td>
                <td className="actions">
                  <button 
                    className="icon-button tasks" 
                    title="View Tasks"
                    onClick={() => openPopup(row.id, 'tasks')}
                  >
                    <span role="img" aria-label="Tasks">📋</span>
                  </button>
                  <button 
                    className="icon-button team" 
                    title="View Team"
                    onClick={() => openPopup(row.id, 'team')}
                  >
                    <span role="img" aria-label="Team">👥</span>
                  </button>
                  <button 
                    className="icon-button budget" 
                    title="View Budget"
                    onClick={() => openPopup(row.id, 'budget')}
                  >
                    <span role="img" aria-label="Budget">💰</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for Sub-Tables */}
      {activePopup === 'subTable' && selectedRow && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
              <h2>
                {mainTableData.find(item => item.id === selectedRow)?.name} - 
                {activeTab === 'tasks' ? ' Tasks' : 
                 activeTab === 'team' ? ' Team Members' : ' Budget'}
              </h2>
              <button className="close-button" onClick={closePopup}>×</button>
            </div>
            
            <div className="tab-navigation">
              <button 
                className={`tab-button ${activeTab === 'tasks' ? 'active' : ''}`}
                onClick={() => setActiveTab('tasks')}
              >
                Tasks
              </button>
              <button 
                className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}
                onClick={() => setActiveTab('team')}
              >
                Team
              </button>
              <button 
                className={`tab-button ${activeTab === 'budget' ? 'active' : ''}`}
                onClick={() => setActiveTab('budget')}
              >
                Budget
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'tasks' && (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Task ID</th>
                      <th>Task Name</th>
                      <th>Assignee</th>
                      <th>Priority</th>
                      <th>Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasksData[selectedRow]?.map((task) => (
                      <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.task}</td>
                        <td>{task.assignee}</td>
                        <td>
                          <span className={`priority-badge ${task.priority.toLowerCase()}`}>
                            {task.priority}
                          </span>
                        </td>
                        <td>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: task.completed }}
                            ></div>
                            <span>{task.completed}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'team' && (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Member ID</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamData[selectedRow]?.map((member) => (
                      <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.member}</td>
                        <td>{member.role}</td>
                        <td>{member.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'budget' && (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Budget ID</th>
                      <th>Category</th>
                      <th>Allocated</th>
                      <th>Spent</th>
                      <th>Remaining</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetData[selectedRow]?.map((budget) => (
                      <tr key={budget.id}>
                        <td>{budget.id}</td>
                        <td>{budget.category}</td>
                        <td>{budget.allocated}</td>
                        <td>{budget.spent}</td>
                        <td>{budget.remaining}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;