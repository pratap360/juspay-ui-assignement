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
  Avatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  BugReport,
  PersonAdd,
  NewReleases,
  Code,
  Edit,
  Delete,
  Person,
  Favorite,
} from "@mui/icons-material";
import { Radio } from "lucide-react";
import { UserRound } from "lucide-react";

import nataliCraig from "../../assets/contacts-avatars/Natali Craig.png";
import drewCano from "../../assets/contacts-avatars/Drew Cano.png";
import orlandoDiggs from "../../assets/contacts-avatars/Orlando Diggs.png";
import andiLane from "../../assets/contacts-avatars/Andi Lane.png";
import kateMorrison from "../../assets/contacts-avatars/Kate Morrison.png";
import korayOkumus from "../../assets/contacts-avatars/Koray Okumus.png";

import img1 from "../../assets/activity-avatars/1.png"
import img2 from "../../assets/activity-avatars/2.png"
import img3 from "../../assets/activity-avatars/3.png"
import img4 from "../../assets/activity-avatars/4.png"
import img5 from "../../assets/activity-avatars/5.png"



const StyledDrawer = styled(Drawer)(({ theme, isDarkMode }) => ({
  "& .MuiDrawer-paper": {
    width: 320,
    backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: "none",
    borderLeft: isDarkMode
      ? "1px solid rgba(255, 255, 255, 0.3)"
      : "1px solid rgba(0, 0, 0, 0.2)",
    paddingTop: theme.spacing(2),
    position: "fixed",
    height: "100vh",
    zIndex: theme.zIndex.drawer,
    right: 0,
  },
}));

const SectionTitle = styled(Typography)(({ theme, isDarkMode }) => ({
  fontSize: "1rem",
  color: isDarkMode ? "#ffffff" : "#000000",
  fontWeight: 600,
  padding: theme.spacing(2, 2, 1, 2),
  marginBottom: theme.spacing(1),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
}));

const StyledListItemButton = styled(ListItemButton)(
  ({ theme, isDarkMode }) => ({
    padding: theme.spacing(1.5, 2),
    borderRadius: 0,
    "&:hover": {
      backgroundColor: isDarkMode ? "#2a2a2a" : "#f0f0f0",
    },
    "& .MuiListItemIcon-root": {
      minWidth: 40,
    },
    "& .MuiListItemText-primary": {
      fontSize: "0.875rem",
      color: isDarkMode ? "#ffffff" : "#000000",
      fontWeight: 500,
    },
    "& .MuiListItemText-secondary": {
      fontSize: "0.75rem",
      color: isDarkMode ? "#888888" : "#666666",
    },
  })
);

const NotificationItem = ({ icon, title, time, isDarkMode }) => (
  <StyledListItem>
    <StyledListItemButton isDarkMode={isDarkMode}>
      <ListItemIcon>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            backgroundColor: isDarkMode ? "#333333" : "#f5f5f5",
            color: isDarkMode ? "#ffffff" : "#000000",
          }}
        >
          {icon}
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={time}
        sx={{
          "& .MuiListItemText-primary": {
            color: isDarkMode ? "#ffffff" : "#000000",
            fontSize: "0.875rem",
            fontWeight: 400,
          },
          "& .MuiListItemText-secondary": {
            color: isDarkMode ? "#888888" : "#666666",
            fontSize: "0.75rem",
          },
        }}
      />
    </StyledListItemButton>
  </StyledListItem>
);

const ActivityItem = ({ avatar, title, time, isDarkMode }) => (
  <StyledListItem>
    <StyledListItemButton isDarkMode={isDarkMode}>
      <ListItemIcon>
        <Avatar
          sx={{
            width: 32,
            height: 32,
          }}
          src={avatar}
        />
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={time}
        sx={{
          "& .MuiListItemText-primary": {
            color: isDarkMode ? "#ffffff" : "#000000",
            fontSize: "0.875rem",
            fontWeight: 400,
          },
          "& .MuiListItemText-secondary": {
            color: isDarkMode ? "#888888" : "#666666",
            fontSize: "0.75rem",
          },
        }}
      />
    </StyledListItemButton>
  </StyledListItem>
);

const ContactItem = ({ avatar, name, status, isDarkMode }) => (
  <StyledListItem>
    <StyledListItemButton isDarkMode={isDarkMode}>
      <ListItemIcon>
        <Avatar
          sx={{
            width: 32,
            height: 32,
          }}
          src={avatar.src}
        >
          {avatar.text}
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={name}
        sx={{
          "& .MuiListItemText-primary": {
            color: isDarkMode ? "#ffffff" : "#000000",
            fontSize: "0.875rem",
            fontWeight: 500,
          },
        }}
      />
      {status && (
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: status === "online" ? "#4ade80" : "#ef4444",
          }}
        />
      )}
    </StyledListItemButton>
  </StyledListItem>
);

export default function RightPanel({ isOpen, onClose, isDarkMode = true }) {
  const notifications = [
    {
      icon: <BugReport sx={{ fontSize: 16 }} />,
      title: "You have a bug that needs...",
      time: "Just now",
    },
    {
      icon: <UserRound sx={{ fontSize: 13 }} />,
      title: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: <BugReport sx={{ fontSize: 16 }} />,
      title: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      icon: <Radio sx={{ fontSize: 13 }} />,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      avatar: img1,
      title: "You have a bug that needs...",
      time: "Just now",
    },
    {
      avatar: img2 ,
      title: "Released a new version",
      time: "59 minutes ago",
    },
    {
      avatar: img3,
      title: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      avatar: img4,
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      avatar: img5,
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    {
      avatar: {
        src: nataliCraig,
      },
      name: "Natali Craig",
    },
    {
      avatar: {
        src: drewCano,
      },
      name: "Drew Cano",
    },
    {
      avatar: {
        src: orlandoDiggs,
      },
      name: "Orlando Diggs",
    },
    {
      avatar: {
        src: andiLane,
      },
      name: "Andi Lane",
    },
    {
      avatar: {
        src: kateMorrison,
      },
      name: "Kate Morrison",
    },
    {
      avatar: {
        src: korayOkumus,
      },
      name: "Koray Okumus",
    },
  ];

  return (
    <StyledDrawer
      variant="permanent"
      anchor="right"
      open={isOpen}
      onClose={onClose}
      isDarkMode={isDarkMode}
      sx={{
        display: isOpen ? "block" : "none",
      }}
    >
      {/* Notifications Section */}
      <SectionTitle isDarkMode={isDarkMode}>Notifications</SectionTitle>
      <List sx={{ padding: 0 }}>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            icon={notification.icon}
            title={notification.title}
            time={notification.time}
            isDarkMode={isDarkMode}
          />
        ))}
      </List>

      {/* Activities Section */}
      <SectionTitle isDarkMode={isDarkMode} sx={{ marginTop: 3 }}>
        Activities
      </SectionTitle>
      <List sx={{ padding: 0 }}>
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            avatar={activity.avatar}
            title={activity.title}
            time={activity.time}
            isDarkMode={isDarkMode}
          />
        ))}
      </List>

      {/* Contacts Section */}
      <SectionTitle isDarkMode={isDarkMode} sx={{ marginTop: 3 }}>
        Contacts
      </SectionTitle>
      <List sx={{ padding: 0 }}>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            avatar={contact.avatar}
            name={contact.name}
            isDarkMode={isDarkMode}
          />
        ))}
      </List>
    </StyledDrawer>
  );
}
