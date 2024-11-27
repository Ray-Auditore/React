import React from "react";
import { racketData } from "../../Data/data" ;
import Card from "../fragments/card";   
const Racket = () => (
  <div className="flex flex-wrap justify-center">
    {racketData.map((racket) => (
      <Card key={racket.id} racket={racket} />
    ))}
  </div>
);

export default Racket;