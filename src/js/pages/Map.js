import React, { Component } from 'react';
import { Page } from 'react-onsenui';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import toGeoJSON from 'togeojson';

import Header from '../components/Header';

class MapPage extends Component {
  renderToolbar = () => <Header title="Ethan Richardson" />;

  state = {
    lat: 37.7220,
    lng: -89.2043,
    zoom: 15,
    loaded: false,
    myGeoJSON: {},
  }

  async componentDidMount() {
    await this.getKmlToGeoJSON();
  }

  getKmlToGeoJSON = async () => {
    this.setState({ loaded: false });
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const resourceUrl = 'https://batchgeo.com/map/kml/ethanx94';
    const response = await fetch(`${proxyUrl}${resourceUrl}`, {
      method: 'GET',
    });
    const text = await response.text();
    const myKml = (new window.DOMParser()).parseFromString(text, 'text/xml');
    const myGeoJSON = toGeoJSON.kml(myKml);
    this.setState({ loaded: true, myGeoJSON });
  }

  onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.Notes) {
      let myPopup = '';
      myPopup += feature.properties.City ? `City: ${feature.properties.City}<br />` : '';
      myPopup += feature.properties.Month ? `Month: ${feature.properties.Month}<br />` : '';
      myPopup += feature.properties.Year ? `Year: ${feature.properties.Year}<br />` : '';
      myPopup += feature.properties.Country ? `Country: ${feature.properties.Country}<br />` : '';
      myPopup += feature.properties.Notes ? `Notes: ${feature.properties.Notes}` : '';
      layer.bindPopup(myPopup);
    }
  }

  render() {
    const { loaded, myGeoJSON, lat, lng, zoom } = this.state;
    return (
      <Page renderToolbar={this.renderToolbar}>
        {!loaded
        ? 'Loading...'
        : (
          <Map
            center={[lat, lng]}
            zoom={zoom}
          >
            <TileLayer
              url="https://api.mapbox.com/styles/v1/nkmap/cjftto4dl8hq32rqegicxuwjz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmttYXAiLCJhIjoiY2lwN2VqdDh2MDEzbXN5bm9hODJzZ2NlZSJ9.aVnii-A7yCa632_COjFDMQ"
            />
            <GeoJSON key="my-geojson" data={myGeoJSON} onEachFeature={this.onEachFeature} />
          </Map>)}
      </Page>
    );
  }
}

export default MapPage;
