import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./navbar/navbar";
import LeftPanel from "./leftpanel/leftpanel";
import RightPanel from "./rightpanel/rightpanel";

export default function Home() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
              margin: 0
              // border: "none",
              // height: "1px",
              // backgroundColor: isDarkMode
              //   ? "rgba(255, 255, 255, 0.12)"
              //   : "rgba(0, 0, 0, 0.12)",
              // width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            padding: 2,
            minHeight: "calc(100vh - 64px)",
            backgroundColor: isDarkMode ? "#121212" : "#ffffff",
          }}
        >
          {/* Main content area */}
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
