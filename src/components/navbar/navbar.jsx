import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import Breadcrumb from "./breadcrumb";

const Search = styled("div")(({ theme, isDarkMode }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: isDarkMode
    ? alpha(theme.palette.common.white, 0.15)
    : alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: isDarkMode
      ? alpha(theme.palette.common.white, 0.25)
      : alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "200px",
  minWidth: "150px",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(2),
    width: "250px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "0.875rem",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.75, 5, 0.75, 0),
    paddingLeft: `calc(0.8em + ${theme.spacing(3)})`,
    paddingRight: `calc(0.8em + ${theme.spacing(4.5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const CommandWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  right: 0,
  top: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.3),
  fontSize: "0.75rem",
  opacity: 0.6,
}));

export default function Navbar({
  leftPanelOpen,
  setLeftPanelOpen,
  rightPanelOpen,
  setRightPanelOpen,
  isDarkMode,
  setIsDarkMode,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const searchInputRef = React.useRef(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Apply theme to document body
    document.body.style.backgroundColor = !isDarkMode ? "#121212" : "#ffffff";
    document.body.style.color = !isDarkMode ? "#ffffff" : "#000000";
  };

  const toggleLeftPanel = () => {
    setLeftPanelOpen(!leftPanelOpen);
  };

  const toggleRightPanel = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  // Handle keyboard shortcut for search focus
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "/" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        // Check if we're not already in an input field
        if (
          document.activeElement.tagName !== "INPUT" &&
          document.activeElement.tagName !== "TEXTAREA"
        ) {
          event.preventDefault();
          searchInputRef.current?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Initialize theme on component mount
  React.useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#ffffff";
    document.body.style.color = isDarkMode ? "#ffffff" : "#000000";
  }, [isDarkMode]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        sx: {
          backgroundColor: isDarkMode
            ? "rgba(18, 18, 18, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${
            isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
          }`,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          color: isDarkMode ? "#ffffff" : "#000000",
        },
      }}
    >
      {/* <MenuItem onClick={handleMenuClose} sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        sx: {
          backgroundColor: isDarkMode
            ? "rgba(18, 18, 18, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${
            isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
          }`,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          color: isDarkMode ? "#ffffff" : "#000000",
        },
      }}
    >
      <MenuItem
        onClick={toggleTheme}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        {isDarkMode ? (
          <LightModeOutlinedIcon sx={{ fontSize: 20 }} />
        ) : (
          <DarkModeOutlinedIcon sx={{ fontSize: 20 }} />
        )}
        <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
      </MenuItem>
      <MenuItem
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        <HistoryTwoToneIcon sx={{ fontSize: 20 }} />
        <span>History</span>
      </MenuItem>
      <MenuItem
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        <NotificationsIcon sx={{ fontSize: 20 }} />
        <span>Notifications</span>
      </MenuItem>
      <MenuItem
        onClick={toggleRightPanel}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        <ViewSidebarOutlinedIcon sx={{ fontSize: 20 }} />
        <span>Right Panel</span>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleLeftPanel}
            sx={{ mr: 2, color: isDarkMode ? "#ffffff" : "#000000" }}
          >
            <ViewSidebarOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: isDarkMode ? "#ffffff" : "#000000" }}
          >
            <StarBorderOutlinedIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
            <Breadcrumb isDarkMode={isDarkMode} />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Search isDarkMode={isDarkMode}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: isDarkMode ? "#ffffff" : "#000000" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              inputRef={searchInputRef}
              sx={{
                color: isDarkMode ? "#ffffff" : "#000000",
                "& .MuiInputBase-input::placeholder": {
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(0, 0, 0, 0.7)",
                  opacity: 1,
                },
              }}
            />
            <CommandWrapper>
              <KeyboardCommandKeyIcon
                sx={{ fontSize: 14, color: isDarkMode ? "#ffffff" : "#000000" }}
              />
              <span style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>
                /
              </span>
            </CommandWrapper>
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={toggleTheme}
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              {isDarkMode ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton
              size="large"
              aria-label=""
              color="inherit"
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              <HistoryTwoToneIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label=""
              color="inherit"
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="toggle right panel"
              onClick={toggleRightPanel}
              color="inherit"
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              <ViewSidebarOutlinedIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
