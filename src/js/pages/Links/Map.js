import React, { Component } from 'react';
import { Page } from 'react-onsenui';
import { Map, TileLayer, GeoJSON, Marker } from 'react-leaflet';
import toGeoJSON from 'togeojson';
import Leaflet from 'leaflet';
import libmoji from 'libmoji';

import Header from '../../components/Header';

const HEADER_HEIGHT = 44;

class MapPage extends Component {
  renderToolbar = () => <Header title="Places I've Visited" back />;

  state = {
    lat: 37.7220,
    lng: -89.2043,
    zoom: 6,
    loaded: false,
    myGeoJSON: {},
    height: 0,
    width: 0,
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight - HEADER_HEIGHT });
  }

  async componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
    this.getCurrentBitmoji();
    await this.getKmlToGeoJSON();
  }

  getCurrentBitmoji = () => {
    const standingComicId = '10220709';
    const myAvatarId = '190872076_3-s1';
    const transparent = Number(true);
    const scale = 1;
    this.setState({
      bitmojiIcon: new Leaflet.Icon({
        iconUrl: libmoji.buildRenderUrl(standingComicId, myAvatarId, transparent, scale),
        iconSize: [95, 95],
        iconAnchor: [50, 75],
      }),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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
    const { loaded, myGeoJSON, lat, lng, zoom, height, width, bitmojiIcon } = this.state;
    return (
      <Page renderToolbar={this.renderToolbar}>
        {!loaded
        ? 'Loading...'
        : (
          <Map
            center={[lat, lng]}
            zoom={zoom}
            style={{ height, width }}
          >
            <TileLayer
              url="https://api.mapbox.com/styles/v1/nkmap/cjftto4dl8hq32rqegicxuwjz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmttYXAiLCJhIjoiY2lwN2VqdDh2MDEzbXN5bm9hODJzZ2NlZSJ9.aVnii-A7yCa632_COjFDMQ"
              attribution="<a href='https://batchgeo.com/map/ethanx94'>TO SEE MORE DETAILS CLICK HERE...</a>"
            />
            <Marker key="nearCDale" position={[lat, lng]} icon={bitmojiIcon} />
            <GeoJSON key="my-geojson" data={myGeoJSON} onEachFeature={this.onEachFeature} />
          </Map>)}
      </Page>
    );
  }
}

export default MapPage;