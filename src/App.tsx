import { Container } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyInfo from "./pages/PropertyInfo";

function App() {
  return (
    <Router>
      <Navbar title='PropertySorted' />
      <Container sx={{ marginTop: "75px" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property/:id' element={<PropertyInfo />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
