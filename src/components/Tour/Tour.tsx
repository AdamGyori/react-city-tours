import React, { useState } from 'react';
import "./Tour.scss";

interface tour{
    id: number;
    city: string;
    img: string;
    name: string;
    info: string;
}

interface tourProps{
    tours: tour; 
    removeTour: (id: number) => void;
}

export default function Tour(props: tourProps) {
    const [showInfo, setShowInfo] = useState(false);
    function handleInfo() {
        setShowInfo(!showInfo);
      }

      function handleRemove (){ 
          props.removeTour(props.tours.id)
        }

    return (
        <article className="tour">
            <div className="img-container">
                <img src={props.tours.img}
                    alt=""
                />
                <span className="close-btn" onClick={handleRemove}>
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-info">
                <h3>{props.tours.city}</h3>
                <h4>{props.tours.name}</h4>
                <h5>info
                 <span onClick={handleInfo}>
                        <i className="fas fa-caret-square-down" />
                    </span>
                </h5>
                {showInfo && <p>{props.tours.info}</p>}
            </div>
        </article>
    )
}