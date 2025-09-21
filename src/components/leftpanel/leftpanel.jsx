import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Avatar,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  Dashboard,
  Work,
  PieChart,
  ShoppingCart,
  Folder,
  School,
  Person,
  AccountBox,
  Business,
  Article,
  Share,
  Campaign,
  Description,
  People,
} from "@mui/icons-material";

import byewind from "../../assets/images/byewind.png";

const StyledDrawer = styled(Drawer)(({ theme, isDarkMode }) => ({
  "& .MuiDrawer-paper": {
    width: 280,
    backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: "none",
    borderRight: isDarkMode ? "none" : "1px solid rgba(0, 0, 0, 0.12)",
    paddingTop: theme.spacing(2),
    position: "fixed",
    height: "100vh",
    zIndex: theme.zIndex.drawer,
  },
}));

const BrandSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const TabSection = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 2),
  marginBottom: theme.spacing(3),
}));

const Tab = styled(Typography)(({ theme, active, isDarkMode }) => ({
  fontSize: "0.875rem",
  color: active
    ? isDarkMode
      ? "#ffffff"
      : "#000000"
    : isDarkMode
    ? "#666666"
    : "#999999",
  cursor: "pointer",
  fontWeight: active ? 600 : 400,
  "&:hover": {
    color: isDarkMode ? "#ffffff" : "#000000",
  },
}));

const SectionTitle = styled(Typography)(({ theme, isDarkMode }) => ({
  fontSize: "0.75rem",
  color: isDarkMode ? "#666666" : "#999999",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  padding: theme.spacing(2, 2, 1, 2),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
}));

const StyledListItemButton = styled(ListItemButton)(
  ({ theme, active, nested, isDarkMode }) => ({
    padding: theme.spacing(1, 2),
    paddingLeft: nested ? theme.spacing(4) : theme.spacing(2),
    borderRadius: 0,
    backgroundColor: active
      ? isDarkMode
        ? "#333333"
        : "#f5f5f5"
      : "transparent",
    borderLeft: active ? "3px solid #6366f1" : "3px solid transparent",
    "&:hover": {
      backgroundColor: isDarkMode ? "#2a2a2a" : "#f0f0f0",
    },
    "& .MuiListItemIcon-root": {
      minWidth: 36,
      color: active
        ? isDarkMode
          ? "#ffffff"
          : "#000000"
        : isDarkMode
        ? "#888888"
        : "#666666",
    },
    "& .MuiListItemText-primary": {
      fontSize: "0.875rem",
      color: active
        ? isDarkMode
          ? "#ffffff"
          : "#000000"
        : isDarkMode
        ? "#cccccc"
        : "#666666",
      fontWeight: active ? 500 : 400,
    },
  })
);

export default function LeftPanel({ isOpen, onClose, isDarkMode = true }) {
  const [activeTab, setActiveTab] = useState("Favorites");
  const [expandedItems, setExpandedItems] = useState({
    "User Profile": true,
  });

  const handleExpandClick = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems = [
    {
      section: "main",
      items: [
        {
          name: "Overview",
          icon: <FiberManualRecord sx={{ fontSize: 8 }} />,
          active: false,
        },
        {
          name: "Projects",
          icon: <FiberManualRecord sx={{ fontSize: 8 }} />,
          active: false,
        },
      ],
    },
    {
      section: "Dashboards",
      items: [
        { name: "Default", icon: <PieChart />, active: true },
        { name: "eCommerce", icon: <ShoppingCart />, active: false },
        { name: "Projects", icon: <Folder />, active: false },
        { name: "Online Courses", icon: <School />, active: false },
      ],
    },
    {
      section: "Pages",
      items: [
        {
          name: "User Profile",
          icon: <Person />,
          active: false,
          expandable: true,
          children: [
            { name: "Overview", active: false },
            { name: "Projects", active: false },
            { name: "Campaigns", active: false },
            { name: "Documents", active: false },
            { name: "Followers", active: false },
          ],
        },
        { name: "Account", icon: <AccountBox />, active: false },
        { name: "Corporate", icon: <Business />, active: false },
        { name: "Blog", icon: <Article />, active: false },
        { name: "Social", icon: <Share />, active: false },
      ],
    },
  ];

  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
      open={isOpen}
      onClose={onClose}
      isDarkMode={isDarkMode}
      sx={{
        display: isOpen ? "block" : "none",
      }}
    >
      <BrandSection>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            marginRight: 1,
          }}
          src={byewind}
        ></Avatar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "1.1rem",
            color: isDarkMode ? "#ffffff" : "#000000",
          }}
        >
          ByeWind
        </Typography>
      </BrandSection>

      <TabSection>
        <Tab
          active={activeTab === "Favorites"}
          isDarkMode={isDarkMode}
          onClick={() => setActiveTab("Favorites")}
        >
          Favorites
        </Tab>
        <Tab
          active={activeTab === "Recently"}
          isDarkMode={isDarkMode}
          onClick={() => setActiveTab("Recently")}
        >
          Recently
        </Tab>
      </TabSection>

      <List sx={{ padding: 0 }}>
        {menuItems.map((section) => (
          <Box key={section.section}>
            {section.section !== "main" && (
              <SectionTitle isDarkMode={isDarkMode}>
                {section.section}
              </SectionTitle>
            )}

            {section.items.map((item) => (
              <Box key={item.name}>
                <StyledListItem>
                  <StyledListItemButton
                    active={item.active}
                    isDarkMode={isDarkMode}
                    onClick={() =>
                      item.expandable && handleExpandClick(item.name)
                    }
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                    {item.expandable &&
                      (expandedItems[item.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      ))}
                  </StyledListItemButton>
                </StyledListItem>

                {item.expandable && (
                  <Collapse
                    in={expandedItems[item.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children?.map((child) => (
                        <StyledListItem key={child.name}>
                          <StyledListItemButton
                            nested
                            active={child.active}
                            isDarkMode={isDarkMode}
                          >
                            <ListItemText primary={child.name} />
                          </StyledListItemButton>
                        </StyledListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </List>
    </StyledDrawer>
  );
}
