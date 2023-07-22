"use client";
import { useEffect } from "react";
import { load } from "@2gis/mapgl";
import { Clusterer } from "@2gis/mapgl-clusterer";
import React from "react";
import { useContext, useState } from "react";

const MAP_CENTER = [69.135126, 54.870528];
const ZOOM = 19;
// const MARKERS = [55.31878, 25.23584];

const MapWrapper = React.memo(
  () => {
    return <div id="map-container" className="w-[600px] z-2 h-[500px]"></div>;
  },
  () => true
);

const MapglContext = {
  mapgl: undefined,
  mapglInstance: undefined,
  rulerControl: undefined,
  setMapglContext: () => {},
};

// interface MapContextState {
//   mapglInstance?: mapgl.Map;
//   mapgl?: typeof mapgl;
//   rulerControl?: RulerControl;
// }

function useMapglContext() {
  return useContext(MapglContext);
}

function MapglContextProvider({ children }) {
  const [{ mapglInstance, rulerControl, mapgl }, setMapglContext] =
    useState <
    MapContextState >
    {
      mapglInstance: undefined,
      rulerControl: undefined,
      mapgl: undefined,
    };
  return (
    <MapglContext.Provider
      value={{ mapgl, mapglInstance, rulerControl, setMapglContext }}
    >
      {children}
    </MapglContext.Provider>
  );
}

export default function Mapgl() {
  useEffect(() => {
    let map = undefined;
    let directions = undefined;
    let clusterer = undefined;

    load().then((mapgl) => {
      map = new mapgl.Map("map-container", {
        center: MAP_CENTER,
        zoom: ZOOM,
        key: "a1893935-6834-4445-b97a-3405fb426c5b",
        zoomControl: false,
      });

      // const rulerControl = new RulerControl(map, { position: "centerRight" });

      clusterer = new Clusterer(map, {
        radius: 30,
      });

      const markers = [{ coordinates: [69.135126, 54.870528] }];
      clusterer.load(markers);

      // directions = new Directions(map, {
      //   directionsApiKey: "rujany4131", // It's just demo key
      // });

      // directions.carRoute({
      //     points: [
      //         [55.28273111108218, 25.234131928828333],
      //         [55.35242563034581, 25.23925607042088],
      //     ],
      // }); routes!
    });

    return () => {
      directions && directions.clear();
      clusterer && clusterer.destroy();
      map && map.destroy();
    };
  }, []);

  return <MapWrapper />;
}
