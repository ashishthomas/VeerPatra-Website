import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomizedDialogs from "./Dialog";

const LetterCard = ({ letterData }) => {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // ✅ Toggle favorite state

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);

    // Optionally persist favorite to localStorage or API
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (item) => item.id !== letterData.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      favorites.push(letterData);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  // ✅ Handle share (native share or clipboard fallback)
  const handleShareClick = async () => {
    const shareData = {
      title: letterData.username,
      text: letterData.description,
      url: letterData.imageAddress,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `${letterData.username}: ${letterData.description} (${letterData.imageAddress})`
        );
        alert("Copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
      alert("Sharing failed. Try manually copying the link.");
    }
  };

  const handleClickOpen = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);

  const dateFormat = (date) => {
    const [day, month, year] = date.split("/");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${day} ${months[month - 1]} ${year}`;
  };

  return (
    <div>
      <Card
        className="w-[17rem] h-[70vh]"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 2,
          boxShadow: 10,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {letterData.username[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
              {letterData.username}
            </Typography>
          }
          subheader={dateFormat(letterData.date)}
        />

        <CardMedia
          onClick={handleClickOpen}
          component="img"
          image={letterData.imageAddress}
          alt={letterData.description}
          sx={{
            flexGrow: 1,
            width: "100%",
            height: "50%",
            objectFit: "contain",
            backgroundColor: "#f0f0f0",
            padding: 1,
          }}
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingBottom: 0,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {letterData.description}
          </Typography>
        </CardContent>

        <CardActions
          disableSpacing
          className="flex justify-between border-t border-gray-300"
        >
          {/* ❤️ Favorite toggle */}
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoriteClick}
          >
            <FavoriteIcon sx={{ color: isFavorite ? "red" : "gray" }} />
          </IconButton>

          {/* 📤 Share functionality */}
          <IconButton aria-label="share" onClick={handleShareClick}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <CustomizedDialogs
        open={openPopup}
        handleClose={handleClosePopup}
        letterData={letterData}
      />
    </div>
  );
};

export default LetterCard;
