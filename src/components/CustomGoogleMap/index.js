import React from 'react';
import { geolocated } from 'react-geolocated';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './styles.scss';

const CustomGoogleMap = props => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const defaultProps = {
    center: {
      lat: 47.83918,
      lng: 35.122242,
    },
    zoom: 14,
  };

  return (
    <div className="google-map">
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={defaultProps.center}
      />
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 1000,
})(
  GoogleApiWrapper({
    apiKey: 'AIzaSyD-zo_8bVDO4F8s12btQgeMBJ1Y2YeNjk8',
  })(CustomGoogleMap),
);
