import { Box, Container, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

function Footer() {
  return (
    <div className="h-auto  w-full bg-gradient-to-r from-orange-400 via-white to-green-600 pt-7 shadow-md  text-black">
      <Container className="flex flex-wrap justify-between gap-5 p-2">
        <Box className="flex flex-col items-center gap-3 lg:w-1/3 md:w-full p-4">
          <img
            src="https://cdn.pixabay.com/photo/2022/09/05/15/15/indian-flag-7434395_640.jpg"
            className="rounded-full w-36 h-36"
            alt=""
          />
          <Typography className="w-[80%] text-center ">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Typography>
        </Box>
        <Box className=" w-full flex justify-around lg:w-1/5 md:w-1/4 ">
          <List>
            <ListItem className="font-bold ">Support</ListItem>
            <ListItem>Our Mission</ListItem>
            <ListItem>Our Services</ListItem>
            <ListItem>Our Team</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </List>
        </Box>
        <Box className="w-full flex justify-around lg:w-1/5 md:w-1/4">
          <List>
            <ListItem className="font-bold">Find Us</ListItem>
            <ListItem>Location</ListItem>
            <ListItem>Phone No</ListItem>
            <ListItem>Email</ListItem>
            <ListItem>Help</ListItem>
            <ListItem>FAQ's</ListItem>
          </List>
        </Box>
        <Box className="w-full flex justify-around lg:w-1/5 md:w-1/4 ">
          <List>
            <ListItem className="font-bold">Follow Us</ListItem>
            <Box className="flex flex-col pl-5 ">
              <ListItem className="text-blue-700">
                <FacebookIcon />
              </ListItem>
              <ListItem className="text-pink-500">
                <InstagramIcon />{" "}
              </ListItem>
              <ListItem className="text-black">
                <XIcon />{" "}
              </ListItem>
              <ListItem className="text-red-600">
                <YouTubeIcon />
              </ListItem>
            </Box>
          </List>
        </Box>
      </Container>

      <Box className="flex justify-center bg-gradient-to-r from-orange-500 via-white to-green-700  p-3">
        <Typography className="font-extralight text-sm " variant="body2">
          &copy; 2024 Copyright. OperationGratitude.com
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
