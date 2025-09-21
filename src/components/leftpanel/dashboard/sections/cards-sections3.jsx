
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

const CardsSection3 = ({ isDarkMode, revenueOnly = false, productsOnly = false, salesOnly = false }) => {
  const revenueData = [
    { month: 'Jan', current: 10, previous: 8 },
    { month: 'Feb', current: 15, previous: 12 },
    { month: 'Mar', current: 20, previous: 18 },
    { month: 'Apr', current: 25, previous: 22 },
    { month: 'May', current: 30, previous: 28 },
    { month: 'Jun', current: 35, previous: 32 },
  ];

  const topProducts = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$5,087.36' },
  ];

  const salesData = [
    { id: 0, value: 300.56, label: 'Direct', color: '#8884d8' },
    { id: 1, value: 135.18, label: 'Affiliate', color: '#82ca9d' },
    { id: 2, value: 154.02, label: 'Sponsored', color: '#ffc658' },
    { id: 3, value: 48.96, label: 'E-mail', color: '#ff7300' },
  ];

  // Render only Revenue chart
  if (revenueOnly) {
    return (
      <Card sx={{ 
        backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
        color: isDarkMode ? '#ffffff' : '#000000',
        border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
        height: 380 
      }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Revenue
          </Typography>
          <Typography variant="body2" color={isDarkMode ? '#888' : '#666'} sx={{ mb: 2 }}>
            Current Week $58,211 • Previous Week $68,768
          </Typography>
          <Box sx={{ height: 280 }}>
            <LineChart
              xAxis={[{
                scaleType: 'point',
                data: revenueData.map(item => item.month),
                tickLabelStyle: { fill: isDarkMode ? '#888' : '#666', fontSize: 12 }
              }]}
              series={[
                {
                  data: revenueData.map(item => item.current),
                  label: 'Current Week',
                  color: '#64b5f6',
                  curve: 'linear',
                },
                {
                  data: revenueData.map(item => item.previous),
                  label: 'Previous Week',
                  color: '#81c784',
                  curve: 'linear',
                },
              ]}
              height={280}
              sx={{
                '& .MuiChartsAxis-line': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                '& .MuiChartsAxis-tick': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                '& .MuiChartsLegend-series text': { fill: isDarkMode ? '#fff' : '#000', fontSize: '12px' },
                '& .MuiChartsAxis-tickLabel': { fill: isDarkMode ? '#888' : '#666' },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Render only Top Selling Products
  if (productsOnly) {
    return (
      <Card sx={{ 
        backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
        color: isDarkMode ? '#ffffff' : '#000000',
        border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
        height: 380 
      }}>
        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" gutterBottom>
            Top Selling Products
          </Typography>
          <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                      Name
                    </TableCell>
                    <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                      Price
                    </TableCell>
                    <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                      Quantity
                    </TableCell>
                    <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topProducts.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                        {product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name}
                      </TableCell>
                      <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                        {product.price}
                      </TableCell>
                      <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                        {product.quantity}
                      </TableCell>
                      <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                        {product.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Render only Total Sales
  if (salesOnly) {
    return (
      <Card sx={{ 
        backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
        color: isDarkMode ? '#ffffff' : '#000000',
        border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
        height: 380 
      }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Total Sales
          </Typography>
          <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PieChart
              series={[{
                data: salesData,
                innerRadius: 40,
                outerRadius: 80,
                paddingAngle: 2,
                cornerRadius: 4,
              }]}
              height={300}
              sx={{
                '& .MuiChartsLegend-series text': { fill: isDarkMode ? '#fff' : '#000', fontSize: '12px' },
              }}
              slotProps={{
                legend: {
                  direction: 'column',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  padding: 0,
                  itemMarkWidth: 8,
                  itemMarkHeight: 8,
                  markGap: 8,
                  itemGap: 4,
                  labelStyle: { fontSize: 12, fill: isDarkMode ? '#fff' : '#000' },
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Default: render all three (for backward compatibility)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ 
          backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
          color: isDarkMode ? '#ffffff' : '#000000',
          border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
          height: 400 
        }}>
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Revenue
            </Typography>
            <Typography variant="body2" color={isDarkMode ? '#888' : '#666'} sx={{ mb: 2 }}>
              Current Week $58,211 • Previous Week $68,768
            </Typography>
            <Box sx={{ height: 280 }}>
              <LineChart
                xAxis={[{
                  scaleType: 'point',
                  data: revenueData.map(item => item.month),
                  tickLabelStyle: { fill: isDarkMode ? '#888' : '#666', fontSize: 12 }
                }]}
                series={[
                  {
                    data: revenueData.map(item => item.current),
                    label: 'Current Week',
                    color: '#64b5f6',
                    curve: 'linear',
                  },
                  {
                    data: revenueData.map(item => item.previous),
                    label: 'Previous Week',
                    color: '#81c784',
                    curve: 'linear',
                  },
                ]}
                height={280}
                sx={{
                  '& .MuiChartsAxis-line': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                  '& .MuiChartsAxis-tick': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                  '& .MuiChartsLegend-series text': { fill: isDarkMode ? '#fff' : '#000', fontSize: '12px' },
                  '& .MuiChartsAxis-tickLabel': { fill: isDarkMode ? '#888' : '#666' },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ 
          backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
          color: isDarkMode ? '#ffffff' : '#000000',
          border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
          height: 400 
        }}>
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Top Selling Products
            </Typography>
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                        Price
                      </TableCell>
                      <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                        Quantity
                      </TableCell>
                      <TableCell sx={{ color: isDarkMode ? '#888' : '#666', fontSize: '0.75rem', border: 'none' }}>
                        Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topProducts.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                          {product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name}
                        </TableCell>
                        <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                          {product.price}
                        </TableCell>
                        <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                          {product.quantity}
                        </TableCell>
                        <TableCell sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '0.75rem', border: 'none' }}>
                          {product.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ 
          backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
          color: isDarkMode ? '#ffffff' : '#000000',
          border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
          height: 400 
        }}>
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Total Sales
            </Typography>
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PieChart
                series={[{
                  data: salesData,
                  innerRadius: 40,
                  outerRadius: 80,
                  paddingAngle: 2,
                  cornerRadius: 4,
                }]}
                height={300}
                sx={{
                  '& .MuiChartsLegend-series text': { fill: isDarkMode ? '#fff' : '#000', fontSize: '12px' },
                }}
                slotProps={{
                  legend: {
                    direction: 'column',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    padding: 0,
                    itemMarkWidth: 8,
                    itemMarkHeight: 8,
                    markGap: 8,
                    itemGap: 4,
                    labelStyle: { fontSize: 12, fill: isDarkMode ? '#fff' : '#000' },
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardsSection3;