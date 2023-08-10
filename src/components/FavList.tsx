import React from "react";
import PropertyCard from "../components/PropertyCard";
import { Box, Button, Stack } from "@mui/material";
import { PropertyData } from "../types/data";
import { useSearchContext } from "../contexts/searchContext";
import { useNavigate } from "react-router-dom";

interface FavListProps {
  propertyDataArray: PropertyData[];
  removePropertyData: (id: number) => void;
  clearPropertyData: () => void;
}

const FavList: React.FC<FavListProps> = ({
  propertyDataArray,
  removePropertyData,
  clearPropertyData,
}) => {
  const { searchValue } = useSearchContext();
  const navigate = useNavigate();

  return (
    <Box display='flex' flexDirection={"column"}>
      <Stack
        spacing='20px'
        direction='column'
        paddingY={"25px"}
        paddingX={{ xs: "30px", sm: "80px", md: "40px", lg: "50px" }}
        alignItems='center'
        flexGrow={1}
      >
        {propertyDataArray
          .filter((d) =>
            d.compound_name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          )
          .map((d) => (
            <PropertyCard
              key={d.id}
              title={d.compound_name}
              price={d.market_sale_price}
              lat={d.latitude}
              lng={d.longitude}
              imageUrl={d.image}
              isfav={true}
              onFavClick={() => {
                removePropertyData(d.id);
              }}
              onCardClick={() => navigate(`/property/${d.id}`)}
            />
          ))}
      </Stack>
      <Button
        onClick={clearPropertyData}
        sx={{ alignSelf: "flex-end", mb: "15px " }}
      >
        Clear Favorites
      </Button>
    </Box>
  );
};

export default FavList;
