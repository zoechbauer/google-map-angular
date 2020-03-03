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
}