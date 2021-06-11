import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'; 
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Google Map</h1>
        </header> 
        <Map google={this.props.google} zoom={14}>
 
          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              
            </div>
          </InfoWindow>
        </Map>

      </div>
    )
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyDfes4RqGFY-MjAAt6v38BFyE9jgSNSLUs")
})(App)