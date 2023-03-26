import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const ChannelCard = ({ channelDetail,marginTop }) => (
  console.log(channelDetail?.snippet?.thumbnails?.high?.url),
  (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "220px" },
        height: "326px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
          <Typography variant="subtitle1">
            {channelDetail?.snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "grey", ml: "5" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {
                parseInt(channelDetail?.statistics?.subscriberCount)
                  .toLocaleString
              }
              subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
);

export default ChannelCard;
