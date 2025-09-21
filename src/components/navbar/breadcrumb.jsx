import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme, isDarkMode }) => ({
  '& .MuiBreadcrumbs-separator': {
    color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
    margin: `0 ${theme.spacing(1)}`,
  },
}));

const BreadcrumbLink = styled(Link)(({ theme, isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
  textDecoration: 'none',
  fontSize: '0.875rem',
  '&:hover': {
    color: isDarkMode ? '#ffffff' : '#000000',
    textDecoration: 'underline',
  },
}));

const CurrentPage = styled(Typography)(({ theme, isDarkMode }) => ({
  color: isDarkMode ? '#ffffff' : '#000000',
  fontSize: '0.875rem',
  fontWeight: 500,
}));

export default function Breadcrumb({ isDarkMode = true, currentPath = [] }) {
  // Default breadcrumb path if none provided
  const defaultPath = [
    { name: 'Dashboard', href: '/' },
    { name: 'Default', href: '/default' },
  ];

  const breadcrumbPath = currentPath.length > 0 ? currentPath : defaultPath;

  const handleClick = (event, href) => {
    if (!href) {
      event.preventDefault();
      return;
    }
    // Handle navigation here - you can integrate with your router
    console.log('Navigate to:', href);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <StyledBreadcrumbs
        isDarkMode={isDarkMode}
        separator="/"
        aria-label="breadcrumb"
      >
        {breadcrumbPath.map((item, index) => {
          const isLast = index === breadcrumbPath.length - 1;
          
          if (isLast) {
            return (
              <CurrentPage key={item.name} isDarkMode={isDarkMode}>
                {item.name}
              </CurrentPage>
            );
          }

          return (
            <BreadcrumbLink
              key={item.name}
              isDarkMode={isDarkMode}
              href={item.href}
              onClick={(event) => handleClick(event, item.href)}
            >
              {item.name}
            </BreadcrumbLink>
          );
        })}
      </StyledBreadcrumbs>
    </Box>
  );
}
