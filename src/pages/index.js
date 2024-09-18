import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from 'leaflet';
import customMarkerIcon from '../images/icons/placeholder.png';

const customIcon = new L.Icon({
  iconUrl: customMarkerIcon,
  iconSize: [30, 30],
  iconAnchor: [18, 38],
  popupAnchor: [-3, -38]
});

const IndexPage = () => (
  <Layout>
    <div class="container">
      <h1 class="mt-4">
        Welcome to <b class="has-text-warning">Khemmarat</b>
      </h1>
      <MapContainer
        style={{ height: "600px" }}
        center={[16.030281308666268, 105.22618080099741]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[16.030281308666268, 105.22618080099741]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Khemmarat" />

export default IndexPage
