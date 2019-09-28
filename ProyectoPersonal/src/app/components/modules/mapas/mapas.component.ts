import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  @ViewChild('mapViewNode', { static: false}) private mapViewEl: ElementRef;

  constructor() { }

  ngOnInit() {
    loadModules([
      'esri/Map',
      'esri/views/MapView'
    ])
      .then(([EsriMap, EsriMapView]) => {
        const map = new EsriMap({
          basemap: 'streets'
        });

        const mapView = new EsriMapView({
          container: this.mapViewEl.nativeElement,
          center: [0.1278, 51.5074],
          zoom: 10,
          map: map
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
}
