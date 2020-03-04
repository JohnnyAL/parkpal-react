import React, { Component } from "react";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  Popup,
  NavigationControl
} from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiam9obm55YWwiLCJhIjoiY2s2ZmQyM29pMHBsNzNlbnZxamNxNTRoYSJ9.27j6sVOZDtK2BXTcKqnEcw";

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 10.5
    }
  };

  loadMarkers = () => {
    return this.props.spots.map(spot => {
      return (
        <Marker
          key={spot._id}
          latitude={parseFloat(spot.geolocation.coordinates[1])}
          longitude={parseFloat(spot.geolocation.coordinates[0])}
        >
          <img src="/blue-car.png" alt="" />
        </Marker>
      );
    });
  };

  render() {
    return (
      <div>
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v11"
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {this.loadMarkers()}
        </ReactMapGL>
      </div>
    );
  }
}

// window.onload = () => {
//   console.log(this.props.spotDetail);
//   this.props.spotDetail.forEach((elem, index) => {
//     const marker = new ReactMapGL.Marker({
//       draggable: false // we can set a marker to be draggable (we'll see how that is useful), default is false
//     });
//     marker.setLngLat([
//       elem.geolocation.coordinates[0],
//       elem.geolocation.coordinates[1]
//     ]);
//     marker.addTo(Map);
//   });
// };

export default Map;
