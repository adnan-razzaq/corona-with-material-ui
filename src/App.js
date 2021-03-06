import React, { useEffect, useState } from "react";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import "./App.css";
import axios from "axios";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import corona from "./image.png";

export default function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  //state for storing overall data
  const [overAll, setoverAll] = useState({});
  const [country, setcountry] = useState("");
  const handlechange = async (selectedcountry) => {
    setcountry(selectedcountry);
  };
  useEffect(() => {
    const fetchdata = async function () {
      const response =
        country === ""
          ? await axios.get("https://covid19.mathdro.id/api")
          : await axios.get(
              `https://covid19.mathdro.id/api/countries/${country}`
            );

      const {
        data: { confirmed, deaths, recovered, lastUpdate },
      } = response;
      return { confirmed, recovered, deaths, lastUpdate };
    };
    fetchdata().then((data) => setoverAll(data));
  }, [country]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="container">
          <img className="image" src={corona} alt="" />
          <Cards data={overAll} />
          <CountryPicker handlechange={handlechange} />
          <Charts alldata={overAll} country={country} />
        </div>
      </ThemeProvider>
    </>
  );
}
