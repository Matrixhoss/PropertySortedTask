import { Box, Typography } from "@mui/material";
import React from "react";

interface TitleBannerProps {
  title: string;
}

const TitleBanner: React.FC<TitleBannerProps> = ({ title }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      border='1px solid #0000003c'
      borderRadius='5px'
      py='8px'
    >
      <Typography textAlign='center'>{title}</Typography>
    </Box>
  );
};

export default TitleBanner;
