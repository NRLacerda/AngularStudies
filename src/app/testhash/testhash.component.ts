import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testhash',
  templateUrl: './testhash.component.html',
  styleUrls: ['./testhash.component.css'],
})
export class TesthashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   }
}
  /*
  hash() {
    var crypto = require('crypto');
    var name = '@n1Mseguranza';
    var hash = crypto.createHash('md5').update(name).digest('hex');
    console.log(hash); // 9b74c9897bac770ffc029102a200c5de
  }
  */
  

