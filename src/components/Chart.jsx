import './Chart.css';

const Chart = ({ title, data, type }) => {
  const renderLineChart = () => (
    <div className="line-chart">
      <svg width="100%" height="200" viewBox="0 0 400 200">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line 
            key={i} 
            x1="0" 
            y1={40 * i + 20} 
            x2="400" 
            y2={40 * i + 20} 
            stroke="#374151" 
            strokeWidth="0.5"
          />
        ))}
        
        {/* Actual line */}
        <polyline
          fill="none"
          stroke="#06B6D4"
          strokeWidth="2"
          points={data.map((item, index) => 
            `${(index * 80) + 40},${180 - (item.actual * 4)}`
          ).join(' ')}
        />
        
        {/* Projected line (dashed) */}
        <polyline
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="5,5"
          points={data.map((item, index) => 
            `${(index * 80) + 40},${180 - (item.projected * 4)}`
          ).join(' ')}
        />
        
        {/* Data points */}
        {data.map((item, index) => (
          <g key={index}>
            <circle 
              cx={(index * 80) + 40} 
              cy={180 - (item.actual * 4)} 
              r="3" 
              fill="#06B6D4" 
            />
            <circle 
              cx={(index * 80) + 40} 
              cy={180 - (item.projected * 4)} 
              r="3" 
              fill="#8B5CF6" 
            />
          </g>
        ))}
      </svg>
      
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color actual"></span>
          <span>Current Week $68,211</span>
        </div>
        <div className="legend-item">
          <span className="legend-color projected"></span>
          <span>Previous Week $68,768</span>
        </div>
      </div>
    </div>
  );

  const renderMapChart = () => (
    <div className="map-chart">
      <div className="world-map">
        🗺️
      </div>
      <div className="location-stats">
        <div className="location-item">
          <span className="location-name">New York</span>
          <span className="location-value">72K</span>
        </div>
        <div className="location-item">
          <span className="location-name">San Francisco</span>
          <span className="location-value">39K</span>
        </div>
        <div className="location-item">
          <span className="location-name">Sydney</span>
          <span className="location-value">25K</span>
        </div>
        <div className="location-item">
          <span className="location-name">Singapore</span>
          <span className="location-value">61K</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>{title}</h3>
      </div>
      <div className="chart-content">
        {type === 'line' ? renderLineChart() : renderMapChart()}
      </div>
    </div>
  );
};

export default Chart;