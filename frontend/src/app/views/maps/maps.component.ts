import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;


  radius : number;
  radiusLat : number;
  radiusLong : number;

  constructor(private headerService: HeaderService) {
    headerService.header = {
      title: 'Mapas',
      icon: 'explore',
      url: '/mapa'
    }
  }

  ngOnInit(): void {
    this.setCurrentLocation();
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.radiusLat = position.coords.latitude;
        this.radiusLong = position.coords.longitude;
        this.radius = 400
        this.zoom = 15;
      });
    }
  }
}