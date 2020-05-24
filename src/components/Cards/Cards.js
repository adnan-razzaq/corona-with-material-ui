import React from "react";
import "./cards.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return "loading";
  }

  return (
    <div className="container">
      <Grid container spacing={4} justify="center">
        <Grid item component={Card} xs={12} md={3} className="infected card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                separator=","
                duration={2}
              />
            </Typography>
            <Typography variant="h5">Infected</Typography>
            <Typography color="secondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <CountUp
                start={0}
                end={recovered.value}
                separator=","
                duration={2}
              />
            </Typography>
            <Typography variant="h5">Recovered</Typography>
            <Typography color="secondary">
              {" "}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <CountUp
                start={0}
                end={deaths.value}
                separator=","
                duration={2}
              />
            </Typography>
            <Typography variant="h5">Deaths</Typography>
            <Typography color="secondary">
              {" "}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
