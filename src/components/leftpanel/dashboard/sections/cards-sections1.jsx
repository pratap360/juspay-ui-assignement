import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

const CardsSection1 = ({ isDarkMode, onNavigate }) => {
  const statsData = [
    { title: "Customers", value: "3,781", change: "+11.01%", isPositive: true },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      isPositive: false,
      clickable: true,
    },
    { title: "Revenue", value: "$695", change: "+15.03%", isPositive: true },
    { title: "Growth", value: "30.1%", change: "+6.08%", isPositive: true },
  ];

  const StatCard = ({
    title,
    value,
    change,
    isPositive,
    clickable,
    onClick,
  }) => (
    <Card
      onClick={clickable ? onClick : undefined}
      sx={{
        backgroundColor: isDarkMode ? "#2a2a2a" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
        border: isDarkMode ? "1px solid #333" : "1px solid #e0e0e0",
        height: 140,
        cursor: clickable ? "pointer" : "default",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": clickable
          ? {
              transform: "translateY(-2px)",
              boxShadow: isDarkMode
                ? "0 4px 20px rgba(255, 255, 255, 0.1)"
                : "0 4px 20px rgba(0, 0, 0, 0.1)",
            }
          : {},
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          color={isDarkMode ? "#888" : "#666"}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          {value}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isPositive ? (
            <TrendingUp sx={{ color: "#4caf50", fontSize: 16, mr: 0.5 }} />
          ) : (
            <TrendingDown sx={{ color: "#f44336", fontSize: 16, mr: 0.5 }} />
          )}
          <Typography
            variant="body2"
            sx={{ color: isPositive ? "#4caf50" : "#f44336" }}
          >
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Grid container spacing={2}>
      {statsData.map((stat, index) => (
        <Grid item xs={6} key={index}>
          {stat.clickable ? (
            <Tooltip title="Click to view order list" arrow>
              <div>
                <StatCard {...stat} onClick={() => onNavigate("orders")} />
              </div>
            </Tooltip>
          ) : (
            <StatCard {...stat} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsSection1;
