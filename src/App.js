import React, { useEffect, useState } from "react";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import styles from "./App.module.css";
import axios from "axios";

export default function App() {
  //state for storing overall data
  const [overAll, setoverAll] = useState({});
  useEffect(() => {
    const fetchdata = async function () {
      const response = await axios.get("https://covid19.mathdro.id/api");
      const {
        data: { confirmed, deaths, recovered, lastUpdate },
      } = response;
      return { confirmed, recovered, deaths, lastUpdate };
    };
    fetchdata().then((data) => setoverAll(data));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Cards data={overAll} />
        <Charts />
        <CountryPicker />
      </div>
    </>
  );
}
