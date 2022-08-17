import React from "react";
import {Card} from "./index";

export default function CardsDisplay(props) {
  return (
    <div>
      {props.filter == "nearest" ? (
        <>
          {props.array &&
            props.array.map((item) => (
              <Card
                id={item.id}
                origin={item.origin_station_code}
                path={JSON.stringify(item.station_path)}
                date={item.date}
                distance={item.distance}
                city={item.city}
                state={item.state}
                imgUrl={item.map_url}

              />
            ))}
        </>
      ) : props.filter == "upcoming" ? (
        <>
          {props.uarr &&
            props.uarr.map((item) => (
              <Card
              key={item.id}
                id={item.id}
                origin={item.origin_station_code}
                path={JSON.stringify(item.station_path)}
                date={item.date}
                distance={item.distance}
                city={item.city}
                state={item.state}
                imgUrl={item.map_url}


              />
            ))}
        </>
      ) : props.filter == "past" ? (
        <>
          {props.parr &&
            props.parr.map((item) => (
              <Card
                id={item.id}
                origin={item.origin_station_code}
                path={JSON.stringify(item.station_path)}
                date={item.date}
                distance={item.distance}
                city={item.city}
                state={item.state}
                imgUrl={item.map_url}

              />
            ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
