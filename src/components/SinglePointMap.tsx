import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L, { LatLngExpression } from "leaflet";
import { Box } from "@mui/material";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

interface ISinglePointMap {
  latitude: number;
  longitude: number;
  name: string;
  price: number;
}

const SinglePointMap: React.FC<ISinglePointMap> = ({
  latitude,
  longitude,
  name,
  price,
}) => {
  const center: LatLngExpression = [latitude, longitude];
  return (
    <Box
      borderRadius={4}
      padding={0}
      overflow='hidden'
      height={"300px"}
      width='100%'
    >
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={center}
        zoom={14}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker position={[latitude, longitude]}>
          <Popup>
            {name} , {price.toLocaleString("en-US")} EGP
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default SinglePointMap;
