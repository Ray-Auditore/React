import React, { useState, useEffect } from "react";
import axios from "axios";

function AplikasiCuaca() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Memanggil API cuaca
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Simpan data ke state
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
      });
  }, []); // Efek hanya dijalankan sekali

  return (
    <div>
      <h2>Weather in London</h2>
      {data.current_weather ? (
        <>
          <p>Temperature: {data.current_weather.temperature}°C</p>
          <p>Wind Speed: {data.current_weather.windspeed} km/h</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default AplikasiCuaca;
