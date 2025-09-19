import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>eCommerce</h1>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span className="search-shortcut">⌘/</span>
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-icons">
          <button className="icon-btn">🌙</button>
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">⚙️</button>
          <button className="icon-btn">📊</button>
        </div>
        
        <div className="notifications-badge">
          <span>Notifications</span>
        </div>
      </div>
    </div>
  );
};

export default Header;