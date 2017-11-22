import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor(public router:Router) { }

  /**
   * Navigate to play view
  */
  play(){
      this.router.navigate(['/play']);
  }

  /**
   * Open specs in new tab
  */
  specs(){
      if(window){
          let url = environment.assetsUrl + "/pdf/specs.pdf";
          window.open(url, '_blank');
      }
  }
}
