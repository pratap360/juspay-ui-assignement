import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: '📊', label: 'Overview', active: true },
    { icon: '📁', label: 'Projects' },
    { icon: '🛒', label: 'eCommerce' },
    { icon: '📚', label: 'Online Courses' },
    { icon: '👤', label: 'User Profile' },
    { icon: '💼', label: 'Account' },
    { icon: '🏢', label: 'Corporate' },
    { icon: '📝', label: 'Blog' },
    { icon: '👥', label: 'Social' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">👁</span>
          <span className="logo-text">ByeWind</span>
        </div>
      </div>
      
      <div className="sidebar-section">
        <h3>Favorites</h3>
        <ul className="menu-list">
          <li>📊 Recently</li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Dashboards</h3>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className={item.active ? 'active' : ''}>
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Pages</h3>
        <ul className="menu-list">
          <li>👤 User Profile</li>
          <li>📊 Overview</li>
          <li>📁 Projects</li>
          <li>🏢 Companies</li>
          <li>📄 Documents</li>
          <li>📁 Followers</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;