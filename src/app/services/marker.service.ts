import { Injectable } from '@angular/core';
import { Init } from '../init-markers';
import { Marker } from '../models/marker';

@Injectable()
export class MarkerService extends Init {
  constructor() {
    super();
    console.log('MarkerService initialized ...');
    this.load();
  }

  getMarkers() {
    const markers: Marker[] = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker: Marker) {
    const markers: Marker[] = JSON.parse(localStorage.getItem('markers'));
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(marker: Marker, newLat: number, newLng: number) {
    const markers: Marker[] = JSON.parse(localStorage.getItem('markers'));
    const markersUpd: Marker[] = markers.map(el => {
      if (el.lat === marker.lat && el.lng === marker.lng) {
        el.lat = newLat;
        el.lng = newLng;
      }
      return el;
    });
    localStorage.setItem('markers', JSON.stringify(markersUpd));
  }

  removeMarker(marker: Marker) {
    const markers: Marker[] = JSON.parse(localStorage.getItem('markers'));
    const markersUpd: Marker[] = markers.filter(
      el => el.lat !== marker.lat && el.lng !== marker.lng
    );
    localStorage.setItem('markers', JSON.stringify(markersUpd));
  }
}
