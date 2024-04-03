import React from "react";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  
  const ScrollLink = ({ to, children, sectionId }) => (
    <Typography
      component={Link}
      to={to}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(sectionId);
      }}
    >
      &nbsp;{children}
    </Typography>
  );

export default ScrollLink;

