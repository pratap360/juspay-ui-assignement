
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import worldMapImage from '../../../../assets/images/World Map.png';

const CardsSection2 = ({ isDarkMode, projectionsOnly = false, locationOnly = false }) => {
  const projectionsData = [
    { month: 'Jan', projections: 20, actuals: 18 },
    { month: 'Feb', projections: 25, actuals: 22 },
    { month: 'Mar', projections: 30, actuals: 28 },
    { month: 'Apr', projections: 35, actuals: 32 },
    { month: 'May', projections: 40, actuals: 38 },
    { month: 'Jun', projections: 45, actuals: 42 },
  ];

  const locationData = [
    { city: 'New York', value: 72, percentage: 100 },
    { city: 'San Francisco', value: 39, percentage: 54 },
    { city: 'Sydney', value: 25, percentage: 35 },
    { city: 'Singapore', value: 61, percentage: 85 },
  ];

  // Render only Projections vs Actuals
  if (projectionsOnly) {
    return (
      <Card sx={{ 
        backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
        color: isDarkMode ? '#ffffff' : '#000000',
        border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
        height: 300 
      }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Projections vs Actuals
          </Typography>
          <Box sx={{ height: 220, mt: 2 }}>
            <BarChart
              xAxis={[{
                scaleType: 'band',
                data: projectionsData.map(item => item.month),
                tickLabelStyle: { fill: isDarkMode ? '#888' : '#666', fontSize: 12 }
              }]}
              series={[
                {
                  data: projectionsData.map(item => item.projections),
                  label: 'Projections',
                  color: '#64b5f6',
                },
                {
                  data: projectionsData.map(item => item.actuals),
                  label: 'Actuals',
                  color: '#42a5f5',
                },
              ]}
              height={220}
              sx={{
                '& .MuiChartsAxis-line': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                '& .MuiChartsAxis-tick': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                '& .MuiChartsLegend-series text': { fill: isDarkMode ? '#fff' : '#000' },
                '& .MuiChartsAxis-tickLabel': { fill: isDarkMode ? '#888' : '#666' },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Render only Revenue by Location
  if (locationOnly) {
    return (
      <Card sx={{ 
        backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
        color: isDarkMode ? '#ffffff' : '#000000',
        border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
        height: 300 
      }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Revenue by Location
          </Typography>
          <Box sx={{ textAlign: 'center', my: 2 }}>
            <img 
              src={worldMapImage} 
              alt="World Map" 
              style={{ 
                width: '100%', 
                maxWidth: '200px', 
                height: 'auto',
                filter: isDarkMode ? 'brightness(0.8) contrast(1.2)' : 'brightness(1) contrast(1)'
              }} 
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            {locationData.map((location, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                    {location.city}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                    {location.value}K
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: 4,
                    backgroundColor: isDarkMode ? '#333' : '#e0e0e0',
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: `${location.percentage}%`,
                      height: '100%',
                      backgroundColor: '#64b5f6',
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    );
  }

  // Default: render both (for backward compatibility)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ 
          backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff', 
          color: isDarkMode ? '#ffffff' : '#000000',
          border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
          height: 400 
        }}>
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Projections vs Actuals
            </Typography>
            <Box sx={{ height: 300, mt: 2 }}>
              <BarChart
                xAxis={[{
                  scaleType: 'band',
                  data: projectionsData.map(item => item.month),
                  tickLabelStyle: { fill: isDarkMode ? '#888' : '#666', fontSize: 12 }
                }]}
                series={[
                  {
                    data: projectionsData.map(item => item.projections),
                    label: 'Projections',
                    color: '#64b5f6',
                  },
                  {
                    data: projectionsData.map(item => item.actuals),
                    label: 'Actuals',
                    color: '#42a5f5',
                  },
                ]}
                height={300}
                sx={{
                  '& .MuiChartsAxis-line': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                  '& .MuiChartsAxis-tick': { stroke: isDarkMode ? '#444' : '#e0e0e0' },
                  '& .MuiChartsLegend-series text': { fill: isDarkMode ? '#fff' : '#000' },
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
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Revenue by Location
            </Typography>
            <Box sx={{ textAlign: 'center', my: 2 }}>
              <img 
                src={worldMapImage} 
                alt="World Map" 
                style={{ 
                  width: '100%', 
                  maxWidth: '200px', 
                  height: 'auto',
                  filter: isDarkMode ? 'brightness(0.8) contrast(1.2)' : 'brightness(1) contrast(1)'
                }} 
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              {locationData.map((location, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                      {location.city}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                      {location.value}K
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      height: 4,
                      backgroundColor: isDarkMode ? '#333' : '#e0e0e0',
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: `${location.percentage}%`,
                        height: '100%',
                        backgroundColor: '#64b5f6',
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardsSection2;