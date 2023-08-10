import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchContext } from "../contexts/searchContext";
import { Link } from "react-router-dom";

interface INavbar {
  title: string;
}

const Navbar: React.FC<INavbar> = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { searchValue, setSearchValue } = useSearchContext();

  const trigger = useScrollTrigger({
    threshold: 150,
  });

  useEffect(() => {
    setIsScrolled(trigger);
  }, [trigger]);

  return (
    <Slide in={!isScrolled} direction='down'>
      <AppBar
        position='fixed'
        sx={{
          background: "#ffbe27aa",
          backdropFilter: "blur(5px)",
        }}
      >
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1, fontWeight: "bold" }}>
            <Link to='..' style={{ textDecoration: "none", color: "inherit" }}>
              {title}
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <IconButton sx={{ p: 1 }} aria-label='search'>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder='Search...'
              sx={{ ml: 1, flex: 1 }}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
