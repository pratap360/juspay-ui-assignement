import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCard from './StatsCard';
import Chart from './Chart';
import ProductTable from './ProductTable';
import SalesChart from './SalesChart';
import ActivityFeed from './ActivityFeed';
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with dummy data
    const fetchDashboardData = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const dummyData = {
        stats: {
          customers: { value: 3781, change: '+18.2%', trend: 'up' },
          orders: { value: 1219, change: '-0.5%', trend: 'down' },
          revenue: { value: 695, change: '+15.03%', trend: 'up' },
          growth: { value: '30.1%', change: '+4.3%', trend: 'up' }
        },
        chartData: {
          projections: [
            { month: 'Jan', actual: 15, projected: 12 },
            { month: 'Feb', actual: 18, projected: 16 },
            { month: 'Mar', actual: 22, projected: 20 },
            { month: 'Apr', actual: 25, projected: 24 },
            { month: 'May', actual: 28, projected: 26 },
            { month: 'Jun', actual: 30, projected: 28 }
          ],
          revenue: [
            { week: 'Week 1', current: 45000, previous: 38000 },
            { week: 'Week 2', current: 52000, previous: 42000 },
            { week: 'Week 3', current: 48000, previous: 45000 },
            { week: 'Week 4', current: 58000, previous: 48000 }
          ]
        },
        topProducts: [
          { name: 'ASUS Rolex High Wage', price: '$79.49', quantity: 82, amount: '$6,518.18' },
          { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
          { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
          { name: 'Lightweight Jacket', price: '$89.00', quantity: 18, amount: '$1,602.00' },
          { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$5,087.36' }
        ],
        salesData: [
          { category: 'Direct', value: 300.56, color: '#8B5CF6' },
          { category: 'Affiliate', value: 135.18, color: '#06B6D4' },
          { category: 'Sponsored', value: 154.02, color: '#10B981' },
          { category: 'E-mail', value: 48.96, color: '#F59E0B' }
        ],
        activities: [
          { id: 1, type: 'bug', message: 'You have a bug that needs...', time: '12 minutes ago' },
          { id: 2, type: 'user', message: 'New user registered', time: '59 minutes ago' },
          { id: 3, type: 'bug', message: 'You have a bug that needs...', time: '12 minutes ago' },
          { id: 4, type: 'subscription', message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' },
          { id: 5, type: 'bug', message: 'You have a bug that needs...', time: '12 minutes ago' }
        ]
      };
      
      setDashboardData(dummyData);
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="stats-grid">
            <StatsCard 
              title="Customers" 
              value={dashboardData.stats.customers.value}
              change={dashboardData.stats.customers.change}
              trend={dashboardData.stats.customers.trend}
            />
            <StatsCard 
              title="Orders" 
              value={dashboardData.stats.orders.value}
              change={dashboardData.stats.orders.change}
              trend={dashboardData.stats.orders.trend}
            />
            <StatsCard 
              title="Revenue" 
              value={`$${dashboardData.stats.revenue.value}`}
              change={dashboardData.stats.revenue.change}
              trend={dashboardData.stats.revenue.trend}
            />
            <StatsCard 
              title="Growth" 
              value={dashboardData.stats.growth.value}
              change={dashboardData.stats.growth.change}
              trend={dashboardData.stats.growth.trend}
            />
          </div>
          
          <div className="charts-section">
            <Chart 
              title="Projections vs Actuals" 
              data={dashboardData.chartData.projections}
              type="line"
            />
            <Chart 
              title="Revenue by Location" 
              data={dashboardData.chartData.revenue}
              type="map"
            />
          </div>
          
          <div className="bottom-section">
            <ProductTable products={dashboardData.topProducts} />
            <SalesChart data={dashboardData.salesData} />
            <ActivityFeed activities={dashboardData.activities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;