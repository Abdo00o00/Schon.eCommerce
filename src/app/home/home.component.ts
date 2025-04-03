import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {




  products:object[]=[
    {src: 'asset 36.jpeg', name: 'Lampshades', h1:'LIGHTING', h2:'PENDANT LAMPS', 
      cclass:'absolute bottom-0 top-0 left-0 right-0 z-10 text-center ' },
    {src: 'asset 37.jpeg', name: 'Lampshades', h1:'LOUNGE CHAIRS', h2:'SW DAYBED', 
      cclass:'absolute bottom-0 top-0 left-0 right-0 z-10 text-center ' },
    {src: 'asset 35.jpeg', name: 'Lampshades', h1:'CARDBOARD', h2:'Sofas and Armchairs', 
      cclass:'absolute bottom-0 top-0 left-0 right-0 z-10 text-center ' },
  ]

}
