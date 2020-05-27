import React, { useState, useEffect } from "react";
import "./chart.css";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";

export default function Charts() {
  //State for storing daily data
  const [dailyData, setdailyData] = useState([]);
  //useeffect for calling api
  useEffect(() => {
    const getData = async function () {
      const response = await axios.get("https://covid19.mathdro.id/api/daily");
      //destructure
      const { data } = response;
      const modifieddata = data.map((item) => ({
        confirmed: item.totalConfirmed,
        deaths: item.deaths.total,
        reportDate: item.reportDate,
      }));
      console.log(modifieddata);

      return modifieddata;
    };
    getData().then((data) => setdailyData(data));
  }, []);

  // setting up your chart

  const data = {
    labels: dailyData.map((date) => date.reportDate),
    datasets: [
      {
        label: "Infected",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.4)",
        data: dailyData.map((item) => item.confirmed),
        fontColor: "black",
        borderCapStyle: "butt",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,

        borderColor: "rgba(255,99,132,1)",
      },
      {
        label: "Deaths",
        fill: true,
        backgroundColor: "rgba(423,32,422,0.4)",
        data: dailyData.map((item) => item.deaths),
        borderCapStyle: "butt",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,

        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  return (
    <div className="container">
      <Line data={data} />
    </div>
  );
}
