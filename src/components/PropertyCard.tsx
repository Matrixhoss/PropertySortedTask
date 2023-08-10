import React from "react";
import { Card, CardMedia, Typography, IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IPropertyCard {
  imageUrl: string;
  title: string;
  lat: number;
  lng: number;
  price: number;
  currency?: string;
  isfav?: boolean;
  onFavClick: () => void;
  onCardClick: () => void;
}

const PropertyCard: React.FC<IPropertyCard> = ({
  imageUrl,
  title,
  lat,
  lng,
  price,
  currency = "EGP",
  isfav = false,
  onFavClick,
  onCardClick,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        margin: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        position: "relative",
        flexDirection: { xs: "column", sm: "row", md: "column", lg: "row" },
        maxWidth: { xs: "350px", sm: "100%", md: "350px", lg: "100%" },
        minHeight: 250,
        minWidth: "100%",
        cursor: "pointer",
      }}
      // @ts-ignore
      onClick={() => {
        onCardClick();
      }}
    >
      <CardMedia
        component='img'
        sx={{
          width: { xs: "100%", sm: 200, md: "100%", lg: 200 },
          height: 250,
          objectFit: "cover",
          position: "relative",
        }}
        image={imageUrl}
        alt={title}
      />
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            onFavClick();
          }}
          sx={{ color: isfav ? "#FF385C" : "#ccc", backgroundColor: "white" }}
        >
          <FavoriteIcon />
        </IconButton>
      </div>

      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "left",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            variant='h6'
            sx={{
              fontSize: "1.25rem",
              marginBottom: "8px",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              fontSize: "0.875rem",
              color: "#717171",
              mt: "10px",
            }}
          >
            Location
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              fontSize: "0.6rem",
              color: "#ccc",
            }}
          >
            Latitude : {lat}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              fontSize: "0.6rem",
              color: "#ccc",
              marginBottom: "12px",
            }}
          >
            Longitude: {lng}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              fontSize: "0.7rem",
              color: "#116ACD",
            }}
          >
            <a
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: "none", color: "inherit" }}
              href={`https://maps.google.com/maps?q=${lat},${lng}&hl=es&z=14&amp;output=embed`}
              onClick={(event) => event.stopPropagation()}
            >
              Show on Maps
            </a>
          </Typography>
        </Box>
        <Typography
          variant='subtitle1'
          color='text.primary'
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "black",
            alignSelf: "flex-end",
            marginRight: { xs: "30px", sm: "0", md: "30px", lg: "0" },
          }}
        >
          {price.toLocaleString("en-US")} {currency}
        </Typography>
      </Box>
    </Card>
  );
};

export default PropertyCard;
