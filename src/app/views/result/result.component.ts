import { Component, OnInit } from '@angular/core';
import { Game } from "../../providers/game";
import { Router } from "@angular/router";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent{

    constructor(public game:Game, public router:Router) { }

    menu(){
        this.router.navigate(['/menu']);
    }
}
