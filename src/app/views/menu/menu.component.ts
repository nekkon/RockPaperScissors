import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor(public router:Router) { }

  /**
   * Start a new game
  */
  play(){
      this.router.navigate(['/play']);
  }

  /**
   * Open specs in new tab
  */
  specs(){
      if(window){
          let url = window.location.origin + "/assets/pdf/specs.pdf";
          window.open(url, '_blank');
      }
  }
}
