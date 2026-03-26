import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'app';
  constructor() {
  }
  ngOnInit() {
    this.AsignarMedidasRedimensionar();
  }
  onResize(event) {
    this.AsignarMedidasRedimensionar();
  }
  AsignarMedidasRedimensionar() {
    document.getElementById('ContenedorPrincipal').style.height = document.documentElement.clientHeight - 59 + "px";
  }
}
