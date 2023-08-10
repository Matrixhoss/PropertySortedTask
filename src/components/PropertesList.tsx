import { Container, Stack } from "@mui/material";
import PropertyCard from "../components/PropertyCard";
import React from "react";
import usePropertyDataArray from "../hooks/LocalStoragePropertyArray";
import { findId } from "../helpers/API";
import { PropertyData } from "../types/data";
import TitleBanner from "../components/TitleBanner";
import { useNavigate } from "react-router-dom";

interface IPropertiesList {
  data: PropertyData[];
  removePropertyData: (id: number) => void;
  addPropertyData: (data: PropertyData) => void;
  propertyDataArray: PropertyData[];
}

const PropertiesList: React.FC<IPropertiesList> = ({
  data,
  removePropertyData,
  addPropertyData,
  propertyDataArray,
}) => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing='20px'
      direction='column'
      padding={"25px"}
      alignItems='center'
      flexGrow={1}
      overflow={"scroll"}
    >
      {data.map((d) => (
        <PropertyCard
          title={d.compound_name}
          price={d.market_sale_price}
          lat={d.latitude}
          lng={d.longitude}
          imageUrl={d.image}
          isfav={findId(propertyDataArray, d.id)}
          onFavClick={() => {
            findId(propertyDataArray, d.id)
              ? removePropertyData(d.id)
              : addPropertyData(d);
          }}
          onCardClick={() => navigate(`/property/${d.id}`)}
        />
      ))}
    </Stack>
  );
};

export default PropertiesList;
