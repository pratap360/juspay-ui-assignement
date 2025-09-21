import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  Typography,
  IconButton,
  Pagination,
  Toolbar,
  InputAdornment,
  TextField,
  Button,
  Menu,
  MenuItem,
  Checkbox,
} from "@mui/material";
import {
  Add,
  FilterList,
  Sort,
  Search,
  MoreHoriz,
  AccessTime,
  ArrowBack,
} from "@mui/icons-material";
import Navbar from "./navbar/navbar";
import LeftPanel from "./leftpanel/leftpanel";
import RightPanel from "./rightpanel/rightpanel";

import nataliCraig from "../assets/contacts-avatars/Natali Craig.png"
import drewCano from "../assets/contacts-avatars/Drew Cano.png";
import orlandoDiggs from "../assets/contacts-avatars/Orlando Diggs.png";
import andiLane from "../assets/contacts-avatars/Andi Lane.png";
import kateMorrison from "../assets/contacts-avatars/Kate Morrison.png";
// Sample order data
const orderData = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: {src: nataliCraig,},
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: {src: kateMorrison,},
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: {src: drewCano,},
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: {src: orlandoDiggs,},
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: {src: andiLane,},
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: {src: nataliCraig,},
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: {src: kateMorrison,},
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: {src: drewCano,},
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: {src: orlandoDiggs,},
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: {src: andiLane,},
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

// Status chip component
function StatusChip({ status, isDarkMode }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return {
          backgroundColor: isDarkMode ? "#1565c0" : "#e3f2fd",
          color: isDarkMode ? "#90caf9" : "#1565c0",
        };
      case "complete":
        return {
          backgroundColor: isDarkMode ? "#2e7d32" : "#e8f5e8",
          color: isDarkMode ? "#81c784" : "#2e7d32",
        };
      case "pending":
        return {
          backgroundColor: isDarkMode ? "#f57c00" : "#fff3e0",
          color: isDarkMode ? "#ffb74d" : "#f57c00",
        };
      case "approved":
        return {
          backgroundColor: isDarkMode ? "#388e3c" : "#e8f5e8",
          color: isDarkMode ? "#81c784" : "#388e3c",
        };
      case "rejected":
        return {
          backgroundColor: isDarkMode ? "#d32f2f" : "#ffebee",
          color: isDarkMode ? "#e57373" : "#d32f2f",
        };
      default:
        return {
          backgroundColor: isDarkMode ? "#424242" : "#f5f5f5",
          color: isDarkMode ? "#bdbdbd" : "#424242",
        };
    }
  };

  const statusStyle = getStatusColor(status);

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        ...statusStyle,
        fontWeight: 500,
        fontSize: "0.75rem",
        height: 24,
        "& .MuiChip-label": {
          px: 1,
        },
      }}
    />
  );
}

// Order List Content Component
function OrderListContent({ isDarkMode, onNavigate }) {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(orderData.length / itemsPerPage);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(orderData.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const isSelected = (index) => selectedRows.indexOf(index) !== -1;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <IconButton
            onClick={() => onNavigate("home")}
            sx={{
              color: isDarkMode ? "#ffffff" : "#000000",
              "&:hover": {
                backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5",
              },
            }}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: isDarkMode ? "#ffffff" : "#000000",
            }}
          >
            Order List
          </Typography>
        </Box>

        {/* Toolbar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Button
              startIcon={<Add />}
              variant="contained"
              sx={{
                backgroundColor: "#6366f1",
                "&:hover": {
                  backgroundColor: "#5856eb",
                },
                textTransform: "none",
              }}
            >
              Add
            </Button>
            <IconButton
              onClick={(e) => setFilterAnchorEl(e.currentTarget)}
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              <FilterList />
            </IconButton>
            <IconButton
              onClick={(e) => setSortAnchorEl(e.currentTarget)}
              sx={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            >
              <Sort />
            </IconButton>
          </Box>

          <TextField
            placeholder="Search"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: isDarkMode ? "#888" : "#666" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5",
                color: isDarkMode ? "#ffffff" : "#000000",
                "& fieldset": {
                  borderColor: isDarkMode ? "#444" : "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: isDarkMode ? "#666" : "#ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6366f1",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: isDarkMode ? "#888" : "#666",
                opacity: 1,
              },
            }}
          />
        </Box>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          border: isDarkMode ? "1px solid #333" : "1px solid #e0e0e0",
          boxShadow: "none",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedRows.length > 0 &&
                    selectedRows.length < orderData.length
                  }
                  checked={
                    orderData.length > 0 &&
                    selectedRows.length === orderData.length
                  }
                  onChange={handleSelectAll}
                  sx={{
                    color: isDarkMode ? "#888" : "#666",
                    "&.Mui-checked": {
                      color: "#6366f1",
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: isDarkMode ? "#888" : "#666",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Order ID
              </TableCell>
              <TableCell
                sx={{
                  color: isDarkMode ? "#888" : "#666",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                User
              </TableCell>
              <TableCell
                sx={{
                  color: isDarkMode ? "#888" : "#666",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Project
              </TableCell>
              <TableCell
                sx={{
                  color: isDarkMode ? "#888" : "#666",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Address
              </TableCell>
              <TableCell
                sx={{
                  color: isDarkMode ? "#888" : "#666",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  color: isDarkMode ? "#888" : "#666",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Status
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((order, index) => {
                const isItemSelected = isSelected(index);
                return (
                  <TableRow
                    key={`${order.id}-${index}`}
                    hover
                    selected={isItemSelected}
                    sx={{
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5",
                      },
                      "&.Mui-selected": {
                        backgroundColor: isDarkMode ? "#2d2d2d" : "#f0f0f0",
                      },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleSelectRow(index)}
                        sx={{
                          color: isDarkMode ? "#888" : "#666",
                          "&.Mui-checked": {
                            color: "#6366f1",
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        color: isDarkMode ? "#ffffff" : "#000000",
                        fontWeight: 500,
                      }}
                    >
                      {order.id}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          src={order.user.avatar.src}
                          sx={{ width: 32, height: 32 }}
                        >
                          {order.user.name.charAt(0)}
                        </Avatar>
                        <Typography
                          sx={{
                            color: isDarkMode ? "#ffffff" : "#000000",
                            fontWeight: 500,
                          }}
                        >
                          {order.user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: isDarkMode ? "#ffffff" : "#000000",
                      }}
                    >
                      {order.project}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: isDarkMode ? "#cccccc" : "#666666",
                      }}
                    >
                      {order.address}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <AccessTime
                          sx={{
                            fontSize: 16,
                            color: isDarkMode ? "#888" : "#666",
                          }}
                        />
                        <Typography
                          sx={{
                            color: isDarkMode ? "#cccccc" : "#666666",
                            fontSize: "0.875rem",
                          }}
                        >
                          {order.date}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <StatusChip
                        status={order.status}
                        isDarkMode={isDarkMode}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        sx={{ color: isDarkMode ? "#888" : "#666" }}
                      >
                        <MoreHoriz />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: isDarkMode ? "#ffffff" : "#000000",
              "&.Mui-selected": {
                backgroundColor: "#6366f1",
                color: "#ffffff",
              },
              "&:hover": {
                backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5",
              },
            },
          }}
        />
      </Box>

      {/* Filter Menu */}
      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={() => setFilterAnchorEl(null)}
      >
        <MenuItem onClick={() => setFilterAnchorEl(null)}>All Orders</MenuItem>
        <MenuItem onClick={() => setFilterAnchorEl(null)}>In Progress</MenuItem>
        <MenuItem onClick={() => setFilterAnchorEl(null)}>Complete</MenuItem>
        <MenuItem onClick={() => setFilterAnchorEl(null)}>Pending</MenuItem>
        <MenuItem onClick={() => setFilterAnchorEl(null)}>Approved</MenuItem>
        <MenuItem onClick={() => setFilterAnchorEl(null)}>Rejected</MenuItem>
      </Menu>

      {/* Sort Menu */}
      <Menu
        anchorEl={sortAnchorEl}
        open={Boolean(sortAnchorEl)}
        onClose={() => setSortAnchorEl(null)}
      >
        <MenuItem onClick={() => setSortAnchorEl(null)}>Sort by Date</MenuItem>
        <MenuItem onClick={() => setSortAnchorEl(null)}>
          Sort by Status
        </MenuItem>
        <MenuItem onClick={() => setSortAnchorEl(null)}>Sort by User</MenuItem>
        <MenuItem onClick={() => setSortAnchorEl(null)}>
          Sort by Project
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default function OrderList({ onNavigate, leftPanelOpen, setLeftPanelOpen, rightPanelOpen, setRightPanelOpen, isDarkMode, setIsDarkMode }) {

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "#121212" : "#ffffff",
      }}
    >
      <LeftPanel
        isOpen={leftPanelOpen}
        onClose={() => setLeftPanelOpen(false)}
        isDarkMode={isDarkMode}
      />
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: leftPanelOpen ? "280px" : "0",
          marginRight: rightPanelOpen ? "320px" : "0",
          transition: "margin-left 0.3s ease, margin-right 0.3s ease",
          backgroundColor: isDarkMode ? "#121212" : "#ffffff",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: isDarkMode ? "#121212" : "#ffffff",
          }}
        >
          <Navbar
            leftPanelOpen={leftPanelOpen}
            setLeftPanelOpen={setLeftPanelOpen}
            rightPanelOpen={rightPanelOpen}
            setRightPanelOpen={setRightPanelOpen}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <hr
            style={{
              margin: 0,
            }}
          />
        </Box>
        <Box
          sx={{
            padding: 3,
            minHeight: "calc(100vh - 64px)",
            backgroundColor: isDarkMode ? "#121212" : "#ffffff",
          }}
        >
          <OrderListContent isDarkMode={isDarkMode} onNavigate={onNavigate} />
        </Box>
      </Box>
      <RightPanel
        isOpen={rightPanelOpen}
        onClose={() => setRightPanelOpen(false)}
        isDarkMode={isDarkMode}
      />
    </Box>
  );
}
