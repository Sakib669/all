import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Destination = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleLoad = (map) => {
    // Do something with the map object
  };

  return (
    <div>
      <section className='grid grid-cols-2 gap-10 mx-16'>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ 
              key: "AIzaSyD0xIspPqV2zfWB4lyiLOfZAfE5KHpmCqU",
              libraries: ['places'] // Add any additional libraries here
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onLoad={handleLoad}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </section>
    </div>
  );
};

export default Destination;
