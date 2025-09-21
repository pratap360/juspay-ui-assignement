import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./navbar/navbar";
import LeftPanel from "./leftpanel/leftpanel";
import RightPanel from "./rightpanel/rightpanel";
import Dashboard from './leftpanel/dashboard/dashboard';

export default function Home({ onNavigate, leftPanelOpen, setLeftPanelOpen, rightPanelOpen, setRightPanelOpen, isDarkMode, setIsDarkMode }) {

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
            padding: 0,
            minHeight: "calc(100vh - 64px)",
            backgroundColor: isDarkMode ? "#121212" : "#ffffff",
          }}
        >
          <Dashboard isDarkMode={isDarkMode} onNavigate={onNavigate} />
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