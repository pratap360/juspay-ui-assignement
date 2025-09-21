
import { Box, Grid } from '@mui/material';
import CardsSection1 from './sections/cards-sections1';
import CardsSection2 from './sections/cards-sections2';
import CardsSection3 from './sections/cards-sections3';

const Dashboard = ({ isDarkMode = true, onNavigate }) => {
  return (
    <Box sx={{ 
      p: 3, 
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5', 
      minHeight: '100vh', 
      color: isDarkMode ? 'white' : 'black' 
    }}>
      {/* Top Row - 2x2 Stats Cards + Projections vs Actuals */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {/* Stats Cards - 2x2 grid taking 8 columns */}
        <Grid item xs={12} lg={8}>
          <CardsSection1 isDarkMode={isDarkMode} onNavigate={onNavigate} />
        </Grid>
        
        {/* Projections vs Actuals - taking 4 columns */}
        <Grid item xs={12} lg={4}>
          <CardsSection2 isDarkMode={isDarkMode} projectionsOnly={true} />
        </Grid>
      </Grid>

      {/* Middle Row - Revenue Chart + Revenue by Location */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {/* Revenue Chart - taking 8 columns */}
        <Grid item xs={12} lg={8}>
          <CardsSection3 isDarkMode={isDarkMode} revenueOnly={true} />
        </Grid>
        
        {/* Revenue by Location - taking 4 columns */}
        <Grid item xs={12} lg={4}>
          <CardsSection2 isDarkMode={isDarkMode} locationOnly={true} />
        </Grid>
      </Grid>

      {/* Bottom Row - Top Selling Products + Total Sales */}
      <Grid container spacing={2}>
        {/* Top Selling Products - taking 8 columns */}
        <Grid item xs={12} lg={8}>
          <CardsSection3 isDarkMode={isDarkMode} productsOnly={true} />
        </Grid>
        
        {/* Total Sales - taking 4 columns */}
        <Grid item xs={12} lg={4}>
          <CardsSection3 isDarkMode={isDarkMode} salesOnly={true} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;