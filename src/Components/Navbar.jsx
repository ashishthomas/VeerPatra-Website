import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../utils/images/Logo.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Define links statically — no reallocation on every render
  const links = React.useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/media", label: "Media" },
      { href: "/contact", label: "Contact" },
      { href: "/about", label: "About" },
      { href: "/formUpload", label: "Upload Letters" },
      { href: "/login", label: "Login" },
      { href: "/register", label: "Register" },
    ],
    []
  );

  // ✅ Handler to toggle drawer (no inline anonymous for performance)
  const toggleMenu = (open) => () => setMenuOpen(open);

  return (
    <header>
      <Box className="bg-gradient-to-r from-orange-400 via-white to-green-500 shadow-md fixed w-full top-0 z-50">
        <Toolbar className="flex items-center justify-between">
          {/* Logo Section */}
          <Box className="flex items-center gap-2">
            <img
              src={Logo}
              alt="PatriotPost Logo"
              className="w-10 h-10 rounded-full transition-all duration-500 ease-in-out hover:shadow-[0_0_10px_rgba(255,255,255,1)] hover:scale-105"
            />
            <Typography
              variant="h6"
              className="text-blue-600 font-bold cursor-pointer hover:scale-110 transition-all"
            >
              PatriotPost
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}
            className="items-center"
          >
            {links.map(
              (link) =>
                ((link.label === "Upload Letters" && isLoggedIn) ||
                  link.label !== "Upload Letters") && (
                  <Link to={link.href} key={link.href}>
                    <Button className="text-zinc-50 hover:text-orange-600 font-bold hover:scale-110 transition-all">
                      {link.label}
                    </Button>
                  </Link>
                )
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu(true)}
            sx={{ display: { xs: "block", md: "none" }, color: "blue" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu(false)}>
        <nav aria-label="Main menu">
          <Box
            sx={{
              width: 220,
              background: `linear-gradient(to bottom, #FF9933, #FFFFFF, #138808)`,
              height: "100%",
            }}
            role="navigation"
            aria-label="Main menu"
          >
            <List>
              {links.map(
                (link) =>
                  ((link.label === "Upload Letters" && isLoggedIn) ||
                    link.label !== "Upload Letters") && (
                    <ListItem
                      button
                      key={link.href}
                      onClick={toggleMenu(false)}
                    >
                      <Link
                        to={link.href}
                        style={{ textDecoration: "none", color: "inherit" }}
                        className="font-extrabold w-full"
                      >
                        <ListItemText
                          primary={link.label}
                          sx={{
                            "& .MuiTypography-root": { fontWeight: "500" },
                            color: "blue",
                          }}
                        />
                      </Link>
                    </ListItem>
                  )
              )}
            </List>
          </Box>
        </nav>
      </Drawer>
    </header>
  );
};

export default Navbar;
