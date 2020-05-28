import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import axios from "axios";

export default function CountryPicker({ handlechange }) {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    const fetchdata = async function () {
      const response = await axios.get(
        "https://covid19.mathdro.id/api/countries"
      );
      const {
        data: { countries },
      } = response;

      return countries;
    };
    fetchdata().then((countries) => setcountries(countries));
  }, [countries]);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handlechange(e.target.value)}
      >
        <option value={global}> Global </option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
