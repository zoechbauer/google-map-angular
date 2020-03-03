import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

@Injectable()
export class MarkerService extends Init {
  constructor() {
    super();
    console.log('MarkerService initialized ...');
    this.load();
  }

  getMarkers() {
    const markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker) {
    const markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(marker, newLat, newLng) {
    let markers = JSON.parse(localStorage.getItem('markers'));
    markers = markers.map(el => {
      if (el.lat === marker.lat && el.lng === marker.lng) {
        el.lat = newLat;
        el.lng = newLng;
      }
      return el;
    });
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
