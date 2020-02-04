import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public data:any;
  public url:any;
  public error:boolean;
  public responseerror:any;
  public msgerror:any;
  public response:any;
  public responsePOST:any;
  public loading:boolean;
  public search:any;
  public thankyoupage:any;
  public errorcode:any;
  public hideInput:boolean;
  public hideInputB:boolean;
  public hideInputC:boolean;
  public hideInputD:boolean;
  public msgErrordescribe:any= [
     {id:"1", describe:'Favor de llenar todos los campos'},
     {id:"2", describe:'Favor aceptar el aviso de privacidad'},
  ];
  public modelo: any =
  [
    {id:"MirageHB", nombre:"Mirage HB"},
    {id:"MirageG4", nombre:"Mirage G4"},
    {id:"EclipseCross", nombre:"Eclipse Cross"},
    {id:"Outlander", nombre:"Outlander"},
    {id:"MonteroSport", nombre:"Montero Sport"},
    {id:"L200", nombre:"L200"},
    {id:"OutlanderPHEV", nombre:"Outlander PHEV"},
  ];
  public genero: any =
  [
    {id:"Masculino", nombre:"Masculino"},
    {id:"Femenino", nombre:"Femenino"},

  ];
  public edad: any =
  [
    {id:"18_a_24_edad", nombre:"18 a 24 años"},
    {id:"25 a 31_edad", nombre:"25 a 31 años"},
    {id:"32_a_38_edad", nombre:"32 a 38 años"},
    {id:"39_a_45_edad", nombre:"39 a 45 años"},
    {id:"46_a_52_edad", nombre:"46 a 52 años"},
    {id:"53_a_59_edad", nombre:"53 a 59 años"},
    {id:"60_edadomas", nombre:"60 años o más"},
  ];
  public tiempo: any =
  [
    {id:"0_3_meses", nombre:"0 - 3 meses"},
    {id:"3_6_meses", nombre:"3 - 6 meses"},
    {id:"Masde6meses", nombre:"Más de 6 meses"}
  ]
  public concesionaria: any =
  [
    {id:"82047", nombre:"MITSUBISHI ACUEDUCTO"},
    {id:"82007", nombre:"MITSUBISHI BOCA DEL RIO"},
    {id:"82002", nombre:"MITSUBISHI CAMINO REAL"},
    {id:"82036", nombre:"MITSUBISHI CAMPECHE"},
    {id:"82027", nombre:"MITSUBISHI CANCÚN"},
    {id:"82031", nombre:"MITSUBISHI CELAYA"},
    {id:"82043", nombre:"MITSUBISHI CENTRO GDL"},
    {id:"82041", nombre:"MITSUBISHI CD GUZMAN"},
    {id:"82052", nombre:"MITSUBISHI CHIAPAS"},
    {id:"82053", nombre:"MITSUBISHI COAPA"},
    {id:"82009", nombre:"MITSUBISHI COATZACOALCOS"},
    {id:"82001", nombre:"MITSUBISHI COLIMA"},
    {id:"82042", nombre:"MITSUBISHI CORDOBA"},
    {id:"82018", nombre:"MITSUBISHI CORREGIDORA"},
    {id:"82010", nombre:"MITSUBISHI CUERNAVACA"},
    {id:"82028", nombre:"MITSUBISHI DURANGO"},
    {id:"82037", nombre:"MITSUBISHI ECATEPEC"},
    {id:"82049", nombre:"MITSUBISHI FLETEROS"},
    {id:"82029", nombre:"MITSUBISHI HERMOSILLO"},
    {id:"82011", nombre:"MITSUBISHI INTERLOMAS"},
    {id:"82008", nombre:"MITSUBISHI JUAREZ"},
    {id:"82048", nombre:"MITSUBISHI JUVENTUD"},
    {id:"82021", nombre:"MITSUBISHI LAGUNA"},
    {id:"82032", nombre:"MITSUBISHI LA PAZ"},
    {id:"82039", nombre:"MITSUBISHI LEON"},
    {id:"82038", nombre:"MITSUBISHI LINDA VISTA"},
    {id:"82023", nombre:"MITSUBISHI LOPEZ MATEOS"},
    {id:"82044", nombre:"MITSUBISHI LOS CABOS"},
    {id:"82045", nombre:"MITSUBISHI MANZANILLO"},
    {id:"82033", nombre:"MITSUBISHI MAZATLAN"},
    {id:"82012", nombre:"MITSUBISHI MERIDA"},
    {id:"82014", nombre:"MITSUBISHI MEXICALI"},
    {id:"82015", nombre:"MITSUBISHI MORELIA"},
    {id:"82016", nombre:"MITSUBISHI OAXACA"},
    {id:"82005", nombre:"MITSUBISHI PACHUCA"},
    {id:"82046", nombre:"MITSUBISHI PEDREGAL"},
    {id:"82035", nombre:"MITSUBISHI POLANCO"},
    {id:"82040", nombre:"MITSUBISHI POZA RICA"},
    {id:"82017", nombre:"MITSUBISHI REFORMA"},
    {id:"82050", nombre:"MITSUBISHI SALTILLO"},
    {id:"82019", nombre:"MITSUBISHI SAN LUIS"},
    {id:"82024", nombre:"MITSUBISHI SAN ANGEL"},
    {id:"82006", nombre:"MITSUBISHI SATELITE"},
    {id:"82022", nombre:"MITSUBISHI TABASCO"},
    {id:"82020", nombre:"MITSUBISHI TAMPICO"},
    {id:"82030", nombre:"MITSUBISHI TEPIC"},
    {id:"82051", nombre:"MITSUBISHI TIJUANA"},
    {id:"82013", nombre:"MITSUBISHI TOLUCA"},
    {id:"82004", nombre:"MITSUBISHI UNIVERSIDAD"},
    {id:"82025", nombre:"MITSUBISHI URUAPAN"},
    {id:"82003", nombre:"MITSUBISHI VIADUCTO"},
    {id:"82026", nombre:"MITSUBISHI XALAPA"},
    {id:"82034", nombre:"MITSUBISHI ZAMORA"},
  ];
/*  public optionsSelect:any;*/

usuario: any = {
   nombre:null,
   apellidopaterno:null,
   apellidomaterno:null,
   genero:null,
   edad:null,
   telefono:null,
   email: null,
   modelo:"",
   tiempoestimado:null,
   distribuidor:"",
   privacidad: 'true',
   utm:null,
   utm_campaign:null,
   utm_source:null,
   utm_medium:null,
   utm_content:null,
   utm_term:null
}

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.url = 'https://mitsubishi-mexico.mx/registrate/api/post/index.php';
      this.loading = false;
      this.msgerror = 0;
      this.search = window.location.search;
      this.thankyoupage = '/registrate/thankyoupage.html' + this.search;
      this.hideInput = false;
      this.hideInputB = false;
      this.hideInputC = false;
      this.hideInputD = false;
  }

  onSubmit(myForm: NgForm) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers, responseType: 'text' as 'json'};
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',}) };
    this.data = myForm.value;
    console.log("data",this.data)
    //validaciones
    if (this.data.telefono === null || this.data.telefono === ''){
        this.msgerror = 1;
    }
    else if (this.data.nombre === null || this.data.nombre === ''){
        this.msgerror = 1;
    }
    else if (this.data.email === null || this.data.email === ''){
        this.msgerror = 1;
    }
    else if (this.data.distribuidor === null || this.data.distribuidor === '' || this.data.distribuidor === 'usario.distribuidor'){
        this.msgerror = 1;
    }
    else if (this.data.avisodeprivacidad === false){
        this.msgerror = 2;
    }
    else {

      this.loading = true;
      setTimeout(() => {
        window.location.href = this.thankyoupage;
        this.loading = false;
      }, 5000);
    /*Envia data al webservice*/
    this.url = this.url + '?'+'nombre='+ this.data.nombre + '&' + 'apellidopaterno='+ this.data.paterno + '&' + 'apellidomaterno='+ this.data.materno + '&'+ 'genero=' + this.data.genero + '&' + 'edad='+ this.data.edad+'&'+ 'telefono='+this.data.telefono+'&'+'email=' + this.data.email + '&' +'modelo=' + this.data.modelo +'&'+ 'tiempoestimado='+ this.data.tiempoestimado + '&' + 'distribuidor=' + this.data.distribuidor + '&' + 'privacidad=' + this.data.avisodeprivacidad;
    console.log("URL",this.url)
    this.http.post(this.url, { headers }, {responseType: 'text'}).subscribe (
      data => {
        this.responsePOST = data;
        this.responsePOST = this.responsePOST.split("/");
        this.responsePOST = this.responsePOST[0];
        console.log("this.responsePOST",this.responsePOST)
          if(this.responsePOST != 0) {
            this.loading = true;

            setTimeout(() => {
              window.location.href = this.thankyoupage;
              this.loading = false;
            }, 5000);
          }
      },
      error => {
        /*this.msgerror = true;*/
        console.log("error");
      /*setTimeout(() => {
          this.msgerror = false;
        }, 5000);*/
      }
    );
    }
  }

  myFunction() {
    this.hideInput = true;
  }

  myFunctionB() {
    this.hideInputB = true;
  }

  myFunctionC() {
    this.hideInputC = true;
  }
  myFunctionD() {
    this.hideInputD = true;
  }

}
