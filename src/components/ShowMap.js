// /*global google*/
import React from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker, DirectionsRenderer, Polyline} from 'google-maps-react';
const google = window.google;
const mapStyles = {
  margin:"5px",
  height: '87%'
};
class ShowMap extends React.Component {
  constructor() {
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      currentPositionLat: 0,
      currentPositionLng: 0,
      directions: [],
      waypoints: []
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);

  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(res => {
      this.setState({currentPositionLat:res.coords.latitude, currentPositionLng:res.coords.longitude})
      this.getDirections(res.coords.latitude, res.coords.longitude)
    });
  }

  getDirections(destLat, destLng) {
    const directionsService = new window.google.maps.DirectionsService();
    const origin = new window.google.maps.LatLng(this.props.lat, this.props.lng)
    const destination = new window.google.maps.LatLng(destLat, destLng);
    console.log('origin', origin.lat(), origin.lng());
    console.log('dest', destination.lat(), destination.lng());
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: "DRIVING"
      },
      (result, status) => {
        console.log('GOT HERE', result.routes[0].overview_path, status);
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.log('status', status);
          console.error(`error fetching directions`, result);
        }
      }
    );
  }
  calcRoute() {
    let request = {
      origin: {lat: this.state.currentPositionLat, lng:this.state.currentPositionLng},
      destination: {lat: this.props.lat, lng:this.props.lng},
      travelMode: 'DRIVING',
      waypoints: [
        {
          location:"",
          stopover:false
        },
        {
          location:"",
          stopover:false
        },
      ]
    };
    new google.maps.DirectionsService.route(request, function(result, status) {
      if (status == 'OK') {
        new google.maps.DirectionsRenderer.setDirections(result);
      }
    });
  }
  onMarkerClick = (props, marker) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render(){
    return(
      <div>
        <Map id="map" google={this.props.google} zoom={14} style={mapStyles} center={{ lat: this.props.lat, lng: this.props.lng}}>
          {this.state.directions.routes !== undefined && <Polyline
            path={this.state.directions.routes[0].overview_path}
            options={{
            strokeColor: "red",
            strokeOpacity: 1,
            strokeWeight: 3,
            icons: [{
              icon: "hello",
              offset: '0',
              repeat: '10px'
            }],
          }}
          />}
          <Marker position={{lat: this.props.lat, lng: this.props.lng }} onClick={this.onMarkerClick}>
          </Marker>
          <InfoWindow
           marker={this.state.activeMarker}
           visible={this.state.showingInfoWindow}
           onClose={this.onClose}>
           <h3>{this.props.title} at {this.props.time}</h3>
           </InfoWindow>
           <Marker position={{lat: this.state.currentPositionLat, lng: this.state.currentPositionLng }} onClick={this.onMarkerClick}>
           </Marker>
           <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}>
            <h3>Current Position</h3>
           </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDkebnqIrf98MzWYEb0T2T0jd13MrkQNw4'
})(ShowMap);
