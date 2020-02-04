import { Component, OnInit } from '@angular/core';

declare const fbq;

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.scss']
})
export class ThankyoupageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    fbq('track', 'Lead');
  }

}
