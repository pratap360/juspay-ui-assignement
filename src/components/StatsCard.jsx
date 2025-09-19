import './StatsCard.css';

const StatsCard = ({ title, value, change, trend }) => {
  return (
    <div className="stats-card">
      <div className="stats-header">
        <h3>{title}</h3>
      </div>
      <div className="stats-content">
        <div className="stats-value">{value}</div>
        <div className={`stats-change ${trend}`}>
          <span className="change-icon">
            {trend === 'up' ? '↗️' : '↘️'}
          </span>
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;