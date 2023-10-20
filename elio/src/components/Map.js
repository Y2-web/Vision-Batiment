import React, { useForm} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.css"

function Map() {


    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
      });
  
      if(!isLoaded) return <div>Loading...</div>;
      return <Map />;
    }

    function Map2() {
        return (
            <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName="map-container"></GoogleMap>
          )
    }



export default Map