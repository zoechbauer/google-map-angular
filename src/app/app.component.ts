import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MarkerService } from './services/marker.service';

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
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }

  markerDragEnd(marker: Marker, $event: MouseEvent) {
    console.log('dragEnd', marker, $event);

    const updMarker = {
      lat: marker.lat,
      lng: marker.lng,
      label: marker.label,
      draggable: false
    };
    // will be needed when save in local storage
    const newLat = $event.coords.lat;
    const newLng = $event.coords.lng;
  }

  addMarker() {
    let isDraggable: boolean;
    if (this.markerDraggable === 'yes') {
      isDraggable = true;
    } else {
      isDraggable = false;
    }
    const newMarker = {
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      label: this.markerName,
      draggable: isDraggable
    };
    this.markers.push(newMarker);
    this.markerService.addMarker(newMarker);
  }
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
