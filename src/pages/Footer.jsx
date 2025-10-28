import { Box, Container, Typography, List, ListItem } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import footerText from "../Constants/FooterText";

function Footer() {
  const renderSocialIcon = (name) => {
    switch (name) {
      case "Facebook":
        return <FacebookIcon />;
      case "Instagram":
        return <InstagramIcon />;
      case "X":
        return <XIcon />;
      case "YouTube":
        return <YouTubeIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="h-auto w-full bg-gradient-to-r from-orange-400 via-white to-green-600 pt-7 shadow-md text-black">
      <Container className="flex flex-wrap justify-between gap-5 p-2">
        {/* Logo and description */}
        <Box className="flex flex-col items-center gap-3 lg:w-1/3 md:w-full p-4">
          <img
            src={footerText.logo.src}
            alt={footerText.logo.alt}
            className="rounded-full w-36 h-36"
          />
          <Typography className="w-[80%] text-center">
            {footerText.logo.description}
          </Typography>
        </Box>

        {/* Footer sections */}
        {footerText.sections.map((section) => (
          <Box
            key={section.title} // ✅ stable unique key
            className="w-full flex justify-around lg:w-1/5 md:w-1/4"
          >
            <List>
              <ListItem className="font-bold">{section.title}</ListItem>

              {/* Normal list items */}
              {section.items?.map((item) => (
                <ListItem key={`${section.title}-${item}`}>{item}</ListItem>
              ))}

              {/* Social media section */}
              {section.social?.length > 0 && (
                <Box className="flex flex-col pl-5">
                  {section.social.map((social) => (
                    <ListItem
                      key={`${section.title}-${social.name}`}
                      className={social.color}
                    >
                      {renderSocialIcon(social.name)}
                    </ListItem>
                  ))}
                </Box>
              )}
            </List>
          </Box>
        ))}
      </Container>

      {/* Footer bottom bar */}
      <Box className="flex justify-center bg-gradient-to-r from-orange-500 via-white to-green-700 p-3">
        <Typography className="font-extralight text-sm" variant="body2">
          {footerText.copyright.text}
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
