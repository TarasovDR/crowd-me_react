import React from 'react';
import { geolocated } from 'react-geolocated';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from 'google-maps-react';

// Styles

import './styles.scss';

// ----------------

export const SectionMap = (props) => {
  const mapStyles = {
    width: '100%',
    maxHeight: '700px',
  };

  const defaultProps = {
    center: {
      lat: 40.653575,
      lng: -73.943635,
    },
    zoom: 14,
  };

  return (
    <div className="google-map">
      <Map
        google={props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={defaultProps.center}
      />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 1000,
})(
  GoogleApiWrapper({
    apiKey: 'AIzaSyDGhK4zissKwi0FwjozNBk9GotwFeHO2sg',
  })(SectionMap),
);
