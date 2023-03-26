import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components/index";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((res) => {
        setVideos(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);
  return (
    //md heigher or big device for small device used column
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: "2", marginLeft: "40px" }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for:
        <span style={{ color: "#F31503" }}> {searchTerm}</span>
      </Typography>

      <Videos videos={videos} marginTop="150px" />
    </Box>
  );
};

export default SearchFeed;
