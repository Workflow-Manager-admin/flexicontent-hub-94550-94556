import React from 'react';
import { useAppContext } from '../../context/AppContext';
import './Dashboard.css';

/**
 * Dashboard component for FlexiContent Hub
 * 
 * Displays statistics and quick actions for content management
 * 
 * @returns {JSX.Element} Rendered Dashboard component
 */
const Dashboard = () => {
  const { contentStats } = useAppContext();
  
  // Dashboard metrics using context data
  const metrics = [
    { label: 'Published Content', value: contentStats.published.toString(), icon: '📄' },
    { label: 'Draft Content', value: contentStats.draft.toString(), icon: '✏️' },
    { label: 'Media Files', value: contentStats.media.toString(), icon: '🖼️' },
    { label: 'Active Users', value: contentStats.users.toString(), icon: '👥' }
  ];

  // Sample recent content data
  const recentContent = [
    { title: 'Getting Started Guide', type: 'Article', date: '2023-07-15', status: 'Published' },
    { title: 'Product Features Overview', type: 'Page', date: '2023-07-10', status: 'Published' },
    { title: 'Customer Testimonials', type: 'Gallery', date: '2023-07-05', status: 'Draft' },
    { title: 'Upcoming Events', type: 'Calendar', date: '2023-07-01', status: 'Published' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="dashboard-action-btn">
          <span className="action-icon">+</span>
          Create New Content
        </button>
      </div>

      {/* Metrics Section */}
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div className="metric-card" key={index}>
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-details">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Content Section */}
      <div className="content-section">
        <div className="section-header">
          <h2>Recent Content</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="content-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentContent.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn view">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Tasks Section */}
      <div className="quick-tasks">
        <div className="section-header">
          <h2>Quick Tasks</h2>
        </div>
        <div className="tasks-grid">
          <div className="task-card">
            <div className="task-icon">📝</div>
            <h3>Create New Article</h3>
            <p>Create a new blog post or article</p>
          </div>
          <div className="task-card">
            <div className="task-icon">🖼️</div>
            <h3>Upload Media</h3>
            <p>Upload and manage your media files</p>
          </div>
          <div className="task-card">
            <div className="task-icon">👥</div>
            <h3>Manage Users</h3>
            <p>Add or edit user permissions</p>
          </div>
          <div className="task-card">
            <div className="task-icon">⚙️</div>
            <h3>Site Settings</h3>
            <p>Configure your site settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
