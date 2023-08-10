import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { Room } from "@mui/icons-material";
import SinglePointMap from "../components/SinglePointMap";
import { useParams } from "react-router-dom";
import { findProperty } from "../helpers/API";

const PropertyInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  //@ts-ignore
  const parsedId = parseInt(id);
  const selectedProperty = findProperty(parsedId);

  if (!selectedProperty) {
    return (
      <Box
        width='100%'
        height='900px'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography>Page Not found</Typography>
      </Box>
    );
  }

  const { compound_name, market_sale_price, longitude, latitude, image } =
    selectedProperty;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "space-between" },
          padding: "32px",
        }}
      >
        <Box
          component='div'
          sx={{
            flex: { xs: 1, md: "50%" },
            maxWidth: "50%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            overflow: "hidden",
            mb: { xs: "16px", md: 0 },
          }}
        >
          <img
            src={image}
            alt='Property'
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
        </Box>
        <Stack
          sx={{
            flex: { xs: 1, md: 1 },
            textAlign: { xs: "center", md: "left" },
            ml: { xs: 0, md: 4 },
          }}
          spacing={"15px"}
          alignItems='center'
        >
          <Typography variant='h4' sx={{ fontWeight: "bold" }}>
            {compound_name}
          </Typography>
          <Typography
            variant='h5'
            color='#ffbe27'
            sx={{
              mt: { xs: 2, md: 0 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {market_sale_price.toLocaleString("en-US")} EGP
          </Typography>
          <Typography
            variant='body1'
            color='primary'
            sx={{
              mt: { xs: 2, md: 0 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Room sx={{ mr: 1 }} /> lat : {latitude} / long : {longitude}
          </Typography>
          <Typography variant='body1' sx={{ mt: { xs: 3, md: 0 } }}>
            This stunning modern home features 4 bedrooms, 3 bathrooms, and a
            spacious living area. Enjoy the beautiful backyard and open-concept
            design.
          </Typography>
        </Stack>
      </Box>
      <SinglePointMap
        latitude={latitude}
        longitude={longitude}
        name={compound_name}
        price={market_sale_price}
      />
    </Container>
  );
};

export default PropertyInfo;
