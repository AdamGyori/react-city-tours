import React, { useState } from 'react';
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from '../tourData';

export default function TourList() {
    const [tours, setTour] = useState(tourData);
    
    function removeTour(id: number) {
      let newTours = tours.filter(tour => tour.id !==id);
      setTour(newTours);
    }
    return(
        <section className="tourlist">
         {tours.map((currentTour) => (
           <Tour key={currentTour.id} tours={currentTour} removeTour={removeTour}/>
          ))}
        </section>     
    )
}