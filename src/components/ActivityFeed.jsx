import './ActivityFeed.css';

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'bug': return '🐛';
      case 'user': return '👤';
      case 'subscription': return '📧';
      default: return '📝';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'bug': return '#EF4444';
      case 'user': return '#10B981';
      case 'subscription': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  return (
    <div className="activity-feed-container">
      <div className="feed-header">
        <h3>Activities</h3>
      </div>
      <div className="feed-content">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div 
              className="activity-icon"
              style={{ backgroundColor: getActivityColor(activity.type) }}
            >
              {getActivityIcon(activity.type)}
            </div>
            <div className="activity-content">
              <p className="activity-message">{activity.message}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="contacts-section">
        <h4>Contacts</h4>
        <div className="contacts-list">
          <div className="contact-item">
            <div className="contact-avatar">👤</div>
            <span>Natali Craig</span>
          </div>
          <div className="contact-item">
            <div className="contact-avatar">👤</div>
            <span>Drew Cano</span>
          </div>
          <div className="contact-item">
            <div className="contact-avatar">👤</div>
            <span>Orlando Diggs</span>
          </div>
          <div className="contact-item">
            <div className="contact-avatar">👤</div>
            <span>Andi Lane</span>
          </div>
          <div className="contact-item">
            <div className="contact-avatar">👤</div>
            <span>Kate Morrison</span>
          </div>
          <div className="contact-item">
            <div className="contact-avatar">👤</div>
            <span>Koray Okumus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;