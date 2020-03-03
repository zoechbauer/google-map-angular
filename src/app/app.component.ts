import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MarkerService } from './services/marker.service';
import { Marker } from './models/marker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 10;
  // form fields
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  infoWindowContent = 'Your Informations ....';

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: Marker[];

  constructor(private markerService: MarkerService) {
    this.markers = this.markerService.getMarkers();
    console.log(this.markers);
  }

  clickedMarker(marker: Marker, index: number) {
    console.log(`clicked the marker: ${marker.label || index}`);
  }

  mapClicked($event: MouseEvent) {
    const newMarker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: `Nr. ${this.markers.length}`,
      draggable: false
    };
    this.markers.push(newMarker);
    this.markerService.addMarker(newMarker);
  }

  markerDragEnd(marker: Marker, $event: MouseEvent) {
    console.log('dragEnd', marker, $event);

    const updMarker = {
      lat: marker.lat,
      lng: marker.lng,
      label: marker.label,
      draggable: false
    };

    const newLat: number = $event.coords.lat;
    const newLng: number = $event.coords.lng;
    this.markerService.updateMarker(updMarker, newLat, newLng);
  }

  addMarker() {
    let isDraggable: boolean;
    if (this.markerDraggable === 'yes') {
      isDraggable = true;
    } else {
      isDraggable = false;
    }
    const newMarker: Marker = {
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      label: this.markerName,
      draggable: isDraggable
    };
    this.markers.push(newMarker);
    this.markerService.addMarker(newMarker);
  }

  removeMarker(marker: Marker) {
    console.log(`remove Marker ${marker.label}....`);
    const markersUpd = this.markers.filter(
      (el: Marker) => el.lat !== marker.lat && el.lng !== marker.lng
    );
    this.markers = markersUpd;
    this.markerService.removeMarker(marker);
  }
}
