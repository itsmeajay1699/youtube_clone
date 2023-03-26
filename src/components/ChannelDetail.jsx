import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((err) => {
        console.log(err);
      });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <Box>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} marginLeft="40px" />
      </Box>  
    </Box>
  );
};

export default ChannelDetail;
