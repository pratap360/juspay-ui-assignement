import './SalesChart.css';

const SalesChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  const renderDonutChart = () => {
    let cumulativePercentage = 0;
    
    return (
      <div className="donut-chart">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#374151"
            strokeWidth="20"
          />
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const strokeDasharray = `${percentage * 5.03} 502`;
            const strokeDashoffset = -cumulativePercentage * 5.03;
            cumulativePercentage += percentage;
            
            return (
              <circle
                key={index}
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={item.color}
                strokeWidth="20"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 100 100)"
              />
            );
          })}
        </svg>
        <div className="chart-center">
          <div className="total-sales">
            <span className="total-label">Total Sales</span>
            <span className="total-value">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sales-chart-container">
      <div className="chart-header">
        <h3>Total Sales</h3>
      </div>
      <div className="chart-content">
        {renderDonutChart()}
        <div className="sales-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <span 
                className="legend-dot" 
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="legend-label">{item.category}</span>
              <span className="legend-value">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;