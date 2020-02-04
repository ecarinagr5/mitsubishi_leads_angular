import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  public flagcookies:boolean;
  public res:any;
  public i:any;
  public c:any;

  constructor() { }

  ngOnInit() {
    this.flagcookies = true;
    this.res = document.cookie.split(";");
    for(this.i = 0; this.i <this.res.length; this.i++) {
        this.c = this.res[this.i];
        while (this.c.charAt(0) == ' ') {
          this.c = this.c.substring(1);
        }
        if (this.c.indexOf('Telefonica2019') == 0) {
            this.flagcookies = false;
        }
      }
    console.log("setCookie",   this.res)

    /*if (document.cookie == 'Telefonica2019') {
      this.flagcookies = false;
    }*/
  }

  aceptoCookies() {
    this.flagcookies = false;
    document.cookie = 'Telefonica2019';
  }

}
