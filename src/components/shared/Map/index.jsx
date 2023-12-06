// Library Imports
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { secondaryMain } from '../../../theme/GlobalVariables';
import img from '../../../assets/location.png';

const MapPopup = ({ location, onClickVeiwUnit, isShowButton }) => {
  const onButtonClick = () => {
    onClickVeiwUnit(location?.name);
  };
  return (
    <div className='map-popup-location'>
      <p>Luxelocker</p>
      <p> {location?.name}</p>
      <p>
        <span> Latitude </span>: {location?.facility_latitude}
      </p>
      <p>
        <span> Longitude </span>: {location?.facility_longitude}
      </p>
      <p>{location?.availability?.replaceAll('-', ' ')}</p>
      {isShowButton ? (
        <button onClick={onButtonClick}> {'View Units'}</button>
      ) : null}
    </div>
  );
};

// Initializing Map & Custom Styling

function initMap(data, triggerChildFunction) {
  // Styles a map in night mode.
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.5, lng: -0.5 },
    zoom: 4,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    gestureHandling: 'greedy',
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#2A2928',
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8D8D8D',
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#2A2928',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8D8D8D',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd',
          },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8D8D8D',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#181818',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#1b1b1b',
          },
        ],
      },
      {
        featureType: 'road',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#2c2c2c',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8a8a8a',
          },
        ],
      },

      {
        featureType: 'road.arterial',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.local',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#141515',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#3d3d3d',
          },
        ],
      },
    ],
  });

  setMarkers(map, data, triggerChildFunction);
}

// For Setting Markers on Map
function setMarkers(map, data, triggerChildFunction) {
  const response = data;
  const infoWindows = [];
  let openInfoWindow = null;
  var infowindow = new google.maps.InfoWindow({
    maxWidth: 350,
    pixelOffset: new google.maps.Size(-10, -25),
  });
  // marker image
  const image = {
    url: img.src,
    // This marker is 20 pixels wide by 32 pixels high.
    size: new window.google.maps.Size(40, 40),
    // The origin for this image is (0, 0).
    origin: new window.google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new window.google.maps.Point(0, 32),
  };

  const popupContainer = document.createElement('div');
  const root = createRoot(popupContainer);
  if (response?.length > 1) {
    for (let i = 0; i < response?.length; i++) {
      const location = response[i];
      const marker = new window.google.maps.Marker({
        position: {
          lat: location?.facility_latitude,
          lng: location?.facility_longitude,
        },
        map,
        icon: image,
        title: location?.name,
      });
      marker.addListener('click', () => {
        if (openInfoWindow) {
          openInfoWindow.close();
        }
        infoWindows.forEach((infowindow) => infowindow.close());
        // eslint-disable-next-line react/no-deprecated
        root.render(
          <MapPopup
            location={location}
            onClickVeiwUnit={triggerChildFunction}
            isShowButton={true}
          />
        );
        const infowindow = new window.google.maps.InfoWindow({
          content: popupContainer,
        });
        infowindow.open(map, marker);
        openInfoWindow = infowindow;
      });
      infoWindows.push(infowindow);
    }
  } else {
    const location = response ? response[0] : {};
    const marker = new window.google.maps.Marker({
      position: {
        lat: location?.facility_latitude,
        lng: location?.facility_longitude,
      },
      map,
      icon: image,
      title: location?.name,
    });
    marker.addListener('click', () => {
      if (openInfoWindow) {
        openInfoWindow.close();
      }
      infoWindows.forEach((infowindow) => infowindow.close());
      // eslint-disable-next-line react/no-deprecated
      root.render(
        <MapPopup
          location={location}
          onClickVeiwUnit={triggerChildFunction}
          isShowButton={false}
        />
      );
      const infowindow = new window.google.maps.InfoWindow({
        content: popupContainer,
      });
      infowindow.open(map, marker);
      openInfoWindow = infowindow;
    });
    infoWindows.push(infowindow);
    map.setCenter(marker.getPosition());
    // map.setZoom(12);
  }
}

// Render For Map Container
const render = (status) => {
  if (status === Status.LOADING)
    return (
      <div
        style={{
          backgroundColor: secondaryMain,
          color: '#fff',
        }}
      >
        {status} ..
      </div>
    );
  if (status === Status.FAILURE)
    return (
      <div
        style={{
          backgroundColor: secondaryMain,
          color: '#fff',
        }}
      >
        {status} ...
      </div>
    );
  return null;
};

// Compponent To Display Map
function MyMapComponent({ data, triggerChildFunction }) {
  const ref = useRef();

  useEffect(() => {
    initMap(data, triggerChildFunction);
  }, [data, triggerChildFunction]);

  return (
    <div
      style={{ height: '100%', width: '100%', borderRadius: '12px' }}
      ref={ref}
      id='map'
    />
  );
}

// Wrapping Map Component
const Map = ({ data, triggerChildFunction }) => {
  return (
    <Wrapper apiKey={'AIzaSyDpxjD_swzYIJdzF5upyWNf8l3O-Hu2B3A'} render={render}>
      <MyMapComponent data={data} triggerChildFunction={triggerChildFunction} />
    </Wrapper>
  );
};

export default Map;
