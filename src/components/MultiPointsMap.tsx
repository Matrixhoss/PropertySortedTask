import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PropertyData } from "../types/data";
import "leaflet/dist/leaflet.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L, { LatLngExpression } from "leaflet";
import { Box } from "@mui/material";
import { useSearchContext } from "../contexts/searchContext";

interface IMultiPointsMap {
  markers: PropertyData[];
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

const MultiPointsMap: React.FC<IMultiPointsMap> = ({ markers }) => {
  const { searchValue } = useSearchContext();
  const center: LatLngExpression = [30.033333, 31.233334];
  return (
    <Box
      borderRadius={4}
      marginTop={"40px"}
      marginBottom={"20px"}
      padding={0}
      overflow='hidden'
      height={{ xs: "200px", md: "650px" }}
    >
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={center}
        zoom={10}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markers
          .filter((d) =>
            d.compound_name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          )
          .map((marker) => (
            <Marker
              key={marker.latitude}
              position={[marker.latitude, marker.longitude]}
            >
              <Popup>
                {marker.compound_name} ,{" "}
                {marker.market_sale_price.toLocaleString("en-US")} EGP
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </Box>
  );
};

export default MultiPointsMap;
