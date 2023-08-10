import { Container, Grid } from "@mui/material";
import React from "react";
import usePropertyDataArray from "../hooks/LocalStoragePropertyArray";
import FavList from "../components/FavList";
import data from "../data.json";
import TitleBanner from "../components/TitleBanner";
import MultiPointsMap from "../components/MultiPointsMap";
import PropertiesList from "../components/PropertesList";
import { useSearchContext } from "../contexts/searchContext";

const Home: React.FC = () => {
  const [
    propertyDataArray,
    addPropertyData,
    removePropertyData,
    clearPropertyDataArray,
  ] = usePropertyDataArray();

  const { searchValue } = useSearchContext();
  const filteredData = data.filter((d) =>
    d.compound_name.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  return (
    <Grid container direction={{ xs: "row", md: "row-reverse" }}>
      <Grid item xs={12} md={6} alignItems='center' justifyContent='center'>
        <MultiPointsMap markers={filteredData} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Container sx={{ height: "100%", marginTop: "40px" }}>
          {propertyDataArray.length > 0 && (
            <>
              <TitleBanner title='Favorers' />
              <FavList
                propertyDataArray={propertyDataArray}
                removePropertyData={removePropertyData}
                clearPropertyData={clearPropertyDataArray}
              />
            </>
          )}
          <TitleBanner title='All Properties' />
          <PropertiesList
            data={filteredData}
            propertyDataArray={propertyDataArray}
            addPropertyData={addPropertyData}
            removePropertyData={removePropertyData}
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
