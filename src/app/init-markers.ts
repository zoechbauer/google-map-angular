import { Marker } from './models/marker';
export class Init {
  load() {
    if (
      localStorage.getItem('markers') == null ||
      localStorage.getItem('markers') === undefined
    ) {
      console.log('no markers found in local storage ..... creating....');
      const markers: Marker[] = [
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
      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('loading markers from local storage ....');
    }
  }
}
