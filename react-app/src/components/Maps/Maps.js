import {
  StaticGoogleMap,
  Marker,
  Path,
} from 'react-static-google-map';


function Maps() {
  return (
    <div>

      <StaticGoogleMap size="600x600" apiKey="AIzaSyDsfMhM3BfgOoK8lr6y1EzY-1b8JFQ49JU">
        {}
        <Marker
          location={{ lat: 40.737102, lng: -73.990318 }}
          color="E00707"
          label="P"
        />

      </StaticGoogleMap>

    </div>
  )
}

export default Maps
