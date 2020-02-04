import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public url:any;
  public data:any;
  public secciondos:any;
  public promoBar:any;
  public flag:boolean;
  public vigenciaBar:any;
  public slider:any;
  public slideActive:any;
  public value:any;

  constructor() { }

  ngOnInit() {

    this.slideActive = 1;
    this.slider = {
      display:true,
      banneruno:'../../../assets/img/medioambiente/bannermovistar.png',
    }
    this.promoBar = {
      display: true,
      title:''
    }
    this.vigenciaBar = {
      display: true,
      title:''
    }

    this.secciondos = {
      display: true,
        title:'¡Es buen momento para venir a Movistar!',
      cuadrouno:'¡Recargando $100!',
      cuadrodos:'Minutos y SMS ilimitados a cualquier compañía de:',
      cuadrodosimg:'../../../assets/img/banderas.png',
      cuadrotres:'7000 MB',
      cuadrotrestext:'Doble de MB para navegar',
      cuadrocuatro:'Ilimitado por 30 días',
      cuadrocuatroimg:'../../../assets/img/redes_logos/whatsapp.png'
    }
    this.value = 2;
    this.animationSlider(this.value);
  }

  animationSlider(value) {
    setTimeout(() => {
      this.slideActive = value;
      this.animationSliderB();
    }, 7000);
  }

  animationSliderB() {
    setTimeout(() => {
      this.slideActive = 1;
      this.animationSlider(2);
    }, 7000);
  }

}
