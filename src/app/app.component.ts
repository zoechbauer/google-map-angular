import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];

  constructor() {}

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
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
