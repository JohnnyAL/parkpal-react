import React, { Component } from "react";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiam9obm55YWwiLCJhIjoiY2s2ZmQyM29pMHBsNzNlbnZxamNxNTRoYSJ9.27j6sVOZDtK2BXTcKqnEcw";

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

const scaleControlStyle = {
  position: "absolute",
  bottom: 36,
  left: 0,
  padding: "10px"
};

let size = 30;

class MapDetail extends Component {
  state = {
    viewport: {
      width: 600,
      height: 500,
      latitude: this.props.spot.geolocation.coordinates[1],
      longitude: this.props.spot.geolocation.coordinates[0],
      zoom: 10.5
    }
  };

  loadMarkers = () => {
    return (
      <Marker
        key={this.props.spot._id}
        latitude={parseFloat(this.props.spot.geolocation.coordinates[1])}
        longitude={parseFloat(this.props.spot.geolocation.coordinates[0])}
      >
        <img
          style={{
            cursor: "pointer",
            fill: "#d00",
            stroke: "none",
            transform: `translate(${-size / 2}px,${-size}px)`
          }}
          height={`${size}px`}
          src="/map-pin.png"
          alt=""
        />
      </Marker>
    );
  };

  render() {
    return (
      <div className="map">
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v11"
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {this.loadMarkers()}

          <div style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div style={navStyle}>
            <NavigationControl />
          </div>
          <div style={scaleControlStyle}>
            <ScaleControl />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}

export default MapDetail;
