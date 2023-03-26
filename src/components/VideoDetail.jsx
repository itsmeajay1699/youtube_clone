import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, AlertTitle } from "@mui/material";
import { Videos, VideoCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`videos?part="snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items[0]))
      .catch((err) => {
        console.log(err);
      });
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((res) => {
        setVideos(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  //  const {videoDetail:{title}} = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "80px" }}>
            <ReactPlayer
              url={`https//www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                  fontWeight="bold"
                >
                  {videoDetail?.snippet?.channelTitle}
                </Typography>
                <CheckCircle
                  sx={{ fontSize: "14px", color: "grey", ml: "5px" }}
                />
              </Link>
              <Stack direction="row">
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, marginRight: "15px" }}
                >
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
