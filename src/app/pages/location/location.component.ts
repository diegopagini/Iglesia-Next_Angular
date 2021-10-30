import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

declare const mapboxgl: any;
const mapBoxApiKey = environment.mapBoxApiKey;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  @ViewChild('mapa', { static: true }) mapa!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    const lat = Number(36.53762600149933);
    const lng = Number(-4.627085103259677);

    mapboxgl.accessToken = mapBoxApiKey;
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15,
    });

    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  }
}
